import React, { useContext } from "react"
import { JDDevice } from "../../../src/jdom/device"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import FingerprintIcon from '@material-ui/icons/Fingerprint';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import RefreshIcon from '@material-ui/icons/Refresh';
import DeviceRenameButton from "./DeviceRenameDialog";
import JACDACContext, { JDContextProps } from '../../../src/react/Context';
import CmdButton from "./CmdButton";

export default function DeviceActions(props: {
    device: JDDevice,
    showReset?: boolean,
    showRename?: boolean,
    hideIdentity?: boolean,
    children?: JSX.Element | JSX.Element[]
}) {
    const { device, showReset, showRename, children, hideIdentity } = props
    const { bus } = useContext<JDContextProps>(JACDACContext)

    const handleIdentify = async () => {
        await device.identify()
    }
    const handleReset = async () => {
        await device.reset()
    }
    return <>
        {!hideIdentity && <CmdButton trackName="device.identify" size="small" title="identify" onClick={handleIdentify} icon={<FingerprintIcon />} />}
        {showReset && <CmdButton trackName="device.reset" size="small" title="reset" onClick={handleReset} icon={<RefreshIcon />} />}
        {showRename && bus.host.deviceNameSettings && <DeviceRenameButton device={device} />}
        {children}
    </>;
}