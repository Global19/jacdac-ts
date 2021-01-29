import { useContext } from "react";
import { JDDevice } from "../../../../src/jdom/device";
import JACDACContext, { JDContextProps } from "../../../../src/react/Context";
import useChange from "../../jacdac/useChange";

/**
 * Mounts a device host
 * @param device 
 * @param factory 
 */
export default function useDeviceHost(device: JDDevice) {
    const { bus } = useContext<JDContextProps>(JACDACContext);
    const host = useChange(bus, b => device && b.deviceHost(device.deviceId));
    return host;
}