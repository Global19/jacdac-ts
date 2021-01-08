import { Grid, Switch } from "@material-ui/core";
import React, { useContext, useState } from "react";
import useGridBreakpoints from "../useGridBreakpoints";
import FirmwareCard from "./FirmwareCard";
// tslint:disable-next-line: no-submodule-imports
import useFirmwareRepos from "./useFirmwareRepos";
import LocalFileFirmwareCard from "./LocalFileFirmwareCard";
import JACDACContext, { JDContextProps } from "../../../../src/react/Context";
import useChange from "../../jacdac/useChange";

export default function FirmwareCardGrid() {
    const { bus } = useContext<JDContextProps>(JACDACContext)
    const gridBreakpoints = useGridBreakpoints()
    const safeMode = useChange(bus, b => b.safeBoot);
    const firmwareRepos = useFirmwareRepos(safeMode)

    return <Grid container spacing={2}>
        <Grid {...gridBreakpoints} item key="localfile">
            <LocalFileFirmwareCard />
        </Grid>
        {firmwareRepos.map(firmwareRepo => <Grid {...gridBreakpoints} item key={`firmwarerepo${firmwareRepo}`}>
            <FirmwareCard slug={firmwareRepo} />
        </Grid>)}
    </Grid>
}
