import { JDDevice } from "./device";
import { Packet } from "./packet";
import { serviceName } from "./pretty";
import { JDRegister } from "./register";
import { CMD_REG_MASK, PACKET_RECEIVE, PACKET_SEND, CMD_GET_REG, SERVICE_NODE_NAME } from "./constants";
import { JDNode } from "./node";
import { serviceSpecificationFromClassIdentifier, isRegister, isInstanceOf, isReading } from "./spec";
import { JDEvent } from "./event";

export class JDService extends JDNode {
    private _registers: JDRegister[];
    private _events: JDEvent[];
    private _specification: jdspec.ServiceSpec = null;

    constructor(
        public readonly device: JDDevice,
        public readonly service_number: number
    ) {
        super()
    }

    get id() {
        return `${this.nodeKind}:${this.device.deviceId}:${this.service_number.toString(16)}`
    }

    get nodeKind() {
        return SERVICE_NODE_NAME
    }

    get serviceClass() {
        return this.device.serviceClassAt(this.service_number);
    }

    get name() {
        return serviceName(this.serviceClass)
    }

    get readingRegister(): JDRegister {
        const pkt = this.specification?.packets.find(pkt => isReading(pkt))
        return pkt && this.register(pkt.identifier)
    }

    /**
     * Gets the specification of the service. Undefined if unknown
     */
    get specification() {
        if (this._specification === null)
            this._specification = serviceSpecificationFromClassIdentifier(this.serviceClass)
        return this._specification;
    }

    toString() {
        return `${this.name} ${this.id}`;
    }

    register(address: number | { address: number }) {
        const a = (typeof address == "number" ? address : address?.address);
        if (a === undefined)
            return undefined;

        const spec = this.specification;
        if (spec && !spec.packets.some(pkt => isRegister(pkt) && pkt.identifier === a)) {
            this.log(`spec error: attempting to access register 0x${a.toString(16)} in service ${this}`)
            return undefined;
        }
        if (!this._registers)
            this._registers = [];
        let register = this._registers.find(reg => reg.address === a);
        if (!register)
            this._registers.push(register = new JDRegister(this, a));
        return register;
    }

    event(address: number) {
        address = address | 0;
        if (!this._events)
            this._events = [];
        let event = this._events.find(ev => ev.address === address);
        if (!event)
            this._events.push(event = new JDEvent(this, address));
        return event;
    }

    sendPacketAsync(pkt: Packet) {
        pkt.dev = this.device;
        pkt.service_number = this.service_number;
        this.emit(PACKET_SEND, pkt)
        return pkt.sendCmdAsync(this.device);
    }

    sendCmdAsync(cmd: number) {
        const pkt = Packet.onlyHeader(cmd);
        return this.sendPacketAsync(pkt)
    }

    processPacket(pkt: Packet) {
        this.emit(PACKET_RECEIVE, pkt)
        if (pkt.is_report && pkt.service_command & CMD_GET_REG) {
            const address = pkt.service_command & CMD_REG_MASK
            const reg = this.register({ address })
            if (reg)
                reg.processReport(pkt);
        }
        else if (pkt.is_event) {
            const address = pkt.intData
            const ev = this.event(address)
            if (ev)
                ev.processEvent(pkt);
        }
    }
}
