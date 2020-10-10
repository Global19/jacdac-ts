// tslint:disable-next-line: no-submodule-imports match-default-export-name
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import StopIcon from '@material-ui/icons/Stop';
import React, { useContext } from "react";
import PacketsContext from "./PacketsContext";
import IconButtonWithProgress, { IconButtonWithProgressProps } from "./IconButtonWithProgress";
import JACDACContext, { JDContextProps } from '../../../src/react/Context';
import { BusState } from '../../../src/dom/bus';

export default function TracePlayButton(props: { component?: string } & IconButtonWithProgressProps) {
    const { disabled, ...others } = props;
    const { connectionState } = useContext<JDContextProps>(JACDACContext)
    const { toggleTrace, tracing, recording, trace, progress } = useContext(PacketsContext)
    const connecting = connectionState === BusState.Connecting || connectionState == BusState.Disconnecting;

    return <IconButtonWithProgress
        {...others}
        disabled={disabled || recording || !trace || connecting}
        indeterminate={progress !== undefined}
        title={!trace ? "Load or record a trace to replay it" : tracing ? "Stop trace" : "Play trace"}
        onClick={toggleTrace}
        progress={progress !== undefined && progress * 100}>
        {tracing ? <StopIcon /> : <PlayArrowIcon />}
    </IconButtonWithProgress >
}