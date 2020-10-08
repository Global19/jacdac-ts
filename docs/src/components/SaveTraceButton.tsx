import { IconButton, Tooltip } from "@material-ui/core";
import React, { useContext } from "react";
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import SaveIcon from '@material-ui/icons/Save';
import ServiceManagerContext from "./ServiceManagerContext";
import PacketsContext from "./PacketsContext";
import { toHex } from "../../../src/dom/utils";
import { TRACE_FILE_LINE_HEADER } from "../../../src/dom/constants";

export default function SaveTraceButton(props: { disabled?: boolean }) {
    const { disabled } = props;
    const { trace, recording } = useContext(PacketsContext)
    const { fileStorage } = useContext(ServiceManagerContext);
    const saveTrace = () => {
        const start = trace.packets[0].timestamp
        const text = trace.packets.map(pkt => `${pkt.timestamp - start} ${toHex(pkt.toBuffer())}`).join('\n')
        fileStorage.saveText("trace.txt",
            `${TRACE_FILE_LINE_HEADER}
${text}
`)
    }
    return <Tooltip title="save trace">
        <span><IconButton disabled={disabled || recording || !trace?.packets.length}
            size="small" key="save" onClick={saveTrace}>
            <SaveIcon />
        </IconButton></span>
    </Tooltip>;
}