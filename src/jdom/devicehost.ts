import { JDBus } from "./bus";
import JDServiceHost from "./servicehost";
import Packet from "./packet";
import { shortDeviceId } from "./pretty";
import { anyRandomUint32, delay, toHex } from "./utils";
import ControlServiceHost from "./controlservicehost";
import { JDEventSource } from "./eventsource";
import { CHANGE, CMD_EVENT_COUNTER_MASK, CMD_EVENT_COUNTER_POS, CMD_EVENT_MASK, IDENTIFY, JD_SERVICE_INDEX_CRC_ACK, PACKET_PROCESS, PACKET_SEND, SELF_ANNOUNCE } from "./constants";

export default class JDDeviceHost extends JDEventSource {
    private _bus: JDBus;
    private readonly _services: JDServiceHost[];
    public readonly deviceId: string;
    public readonly shortId: string;
    private _eventCounter: number = undefined;
    identifying: boolean;

    constructor(services: JDServiceHost[], options?: {
        deviceId?: string;
    }) {
        super();
        this._services = [new ControlServiceHost(), ...services];
        this.deviceId = options?.deviceId;
        if (!this.deviceId) {
            const devId = anyRandomUint32(8);
            for (let i = 0; i < 8; ++i) devId[i] &= 0xff;
            this.deviceId = toHex(devId);
        }
        this.shortId = shortDeviceId(this.deviceId);
        this._services.forEach((srv, i) => {
            srv.device = this;
            srv.serviceIndex = i;
        });

        this.handleSelfAnnounce = this.handleSelfAnnounce.bind(this);
        this.handlePacket = this.handlePacket.bind(this);
    }

    protected log(msg: any) {
        console.log(`${this.shortId}: ${msg}`);
    }

    get bus() {
        return this._bus;
    }

    set bus(value: JDBus) {
        if (value !== this._bus) {
            this.stop();
            this._bus = value;
            if (this._bus)
                this.start();
        }
    }

    private start() {
        if (!this._bus) return;

        this._bus.on(SELF_ANNOUNCE, this.handleSelfAnnounce);
        this._bus.on([PACKET_PROCESS, PACKET_SEND], this.handlePacket)
        this.log(`start host`)
    }

    private stop() {
        if (!this._bus) return;

        this._bus.off(SELF_ANNOUNCE, this.handleSelfAnnounce);
        this._bus.off([PACKET_PROCESS, PACKET_SEND], this.handlePacket)
        this.log(`stop host`)
        this._bus = undefined;
    }

    private handleSelfAnnounce() {
        const ctrl = this._services[0] as ControlServiceHost;
        ctrl.announce();
    }

    services(): JDServiceHost[] {
        return this._services.slice(0);
    }

    service(serviceIndex: number) {
        return serviceIndex !== undefined && this._services[serviceIndex];
    }

    /**
     * Gets the current event cound
     */
    get eventCounter() {
        return this._eventCounter;
    }

    createEventCmd(evCode: number) {
        this._eventCounter = (this._eventCounter + 1) & CMD_EVENT_COUNTER_MASK;
        // TODO: emit change?
        if (evCode >> 8)
            throw "invalid evcode"
        return CMD_EVENT_MASK | (this._eventCounter << CMD_EVENT_COUNTER_POS) | evCode;
    }

    toString() {
        return `host ${this.shortId}`;
    }

    async identify() {
        if (this.identifying) return;
        this.identifying = true;
        this.emit(IDENTIFY);
        this.emit(CHANGE);
        await delay(500);
        this.identifying = false;
        this.emit(CHANGE);
    }

    async sendPacketAsync(pkt: Packet) {
        if (!this._bus)
            return Promise.resolve();

        pkt.deviceIdentifier = this.deviceId;
        // compute crc and send
        const p = pkt.sendCoreAsync(this.bus);
        // send to current bus
        this.bus.processPacket(pkt);
        // return priomise
        return p;
    }

    private handlePacket(pkt: Packet) {
        const devIdMatch = pkt.deviceIdentifier == this.deviceId;
        if (pkt.requiresAck && devIdMatch) {
            pkt.requiresAck = false // make sure we only do it once
            const crc = pkt.crc;
            const ack = Packet.onlyHeader(crc)
            ack.serviceIndex = JD_SERVICE_INDEX_CRC_ACK;
            this.sendPacketAsync(ack);
        }

        if (pkt.isMultiCommand) {
            if (!pkt.isCommand)
                return; // only commands supported
            const multiCommandClass = pkt.serviceClass;
            const h = this._services.find(s => s.serviceClass == multiCommandClass);
            if (h) {
                // pretend it's directly addressed to us
                pkt.deviceIdentifier = this.deviceId
                pkt.serviceIndex = h.serviceIndex
                h.handlePacket(pkt)
            }
        } else if (devIdMatch) {
            if (!pkt.isCommand)
                return // huh? someone's pretending to be us?
            const h = this._services[pkt.serviceIndex]
            if (h) {
                // log(`handle pkt at ${h.name} cmd=${pkt.service_command}`)
                h.handlePacket(pkt)
            }
        } else {
            if (pkt.isCommand)
                return // it's a command, and it's not for us
            if (pkt.serviceIndex == JD_SERVICE_INDEX_CRC_ACK) {
                // TODO
                //_gotAck(pkt)
            }

            if (pkt.isEvent) {
                let ec = this._eventCounter
                // if ec is undefined, it's the first event, so skip processing
                if (ec !== undefined) {
                    ec++
                    // how many packets ahead and behind current are we?
                    const ahead = (pkt.eventCounter - ec) & CMD_EVENT_COUNTER_MASK
                    const behind = (ec - pkt.eventCounter) & CMD_EVENT_COUNTER_MASK
                    // ahead == behind == 0 is the usual case, otherwise
                    // behind < 60 means this is an old event (or retransmission of something we already processed)
                    // ahead < 5 means we missed at most 5 events, so we ignore this one and rely on retransmission
                    // of the missed events, and then eventually the current event
                    if (ahead > 0 && (behind < 60 || ahead < 5))
                        return
                }
                this._eventCounter = pkt.eventCounter
            }
        }
    }

    refreshRegisters() {
        this._services.forEach(srv => srv.refreshRegisters());
    }
}