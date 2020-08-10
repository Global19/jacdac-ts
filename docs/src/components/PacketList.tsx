import React, { useContext, useState, useEffect } from 'react';
import { Grid, List, TextField, ListItem, ButtonGroup, Typography, FormControlLabel, Switch, FormGroup, Tooltip, Divider } from '@material-ui/core';
import JacdacContext from '../../../src/react/Context';
import PacketListItem from './PacketListItem';
import { PACKET_RECEIVE, ConsolePriority, PACKET_PROCESS, PACKET_SEND, SRV_LOGGER } from '../../../src/dom/constants';
import { decodePacketData } from '../../../src/dom/pretty'
import Packet from '../../../src/dom/packet'
import { isInstanceOf } from '../../../src/dom/spec';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import PauseIcon from '@material-ui/icons/Pause';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import ClearIcon from '@material-ui/icons/Clear';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import PacketFilterContext from './PacketFilterContext';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import ToggleButton from '@material-ui/lab/ToggleButton';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import AnnouncementIcon from '@material-ui/icons/Announcement';
import KindIcon, { allKinds, kindName } from "./KindIcon";
import { IconButton } from 'gatsby-theme-material-ui';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import GradientIcon from '@material-ui/icons/Gradient';
import ConsoleListItem from './ConsoleListItem';

export default function PacketList(props: {
    maxItems?: number,
    serviceClass?: number,
    showTime?: boolean
}) {
    const { serviceClass, showTime } = props
    const { flags, setFlags } = useContext(PacketFilterContext)
    const maxItems = props.maxItems || 100
    const { bus } = useContext(JacdacContext)
    const [packets, setPackets] = useState<Packet[]>([])
    const [paused, setPaused] = useState(false)
    const consoleMode = hasFlag("console")
    const skipRepeatedAnnounce = !hasFlag("announce")

    function hasFlag(k: string) {
        return flags.indexOf(k) > -1
    }

    // enable logging
    useEffect(() => {
        if (consoleMode)
            bus.minConsolePriority = ConsolePriority.Debug;
    })
    // render packets
    useEffect(() => bus.subscribe([consoleMode ? PACKET_RECEIVE : PACKET_PROCESS, PACKET_SEND],
        (pkt: Packet) => {
            if (paused)
                return; // ignore
            // don't repeat announce
            if (skipRepeatedAnnounce && pkt.isRepeatedAnnounce)
                return;
            // not matching service class
            if (serviceClass !== undefined && !isInstanceOf(pkt.service_class, serviceClass))
                return;

            if (consoleMode && (pkt.service_class !== SRV_LOGGER || pkt.service_command < 0x80 || pkt.service_command > 0x83))
                return;

            const decoded = decodePacketData(pkt);
            if (consoleMode) {
                if (!decoded) {
                    return; // ignore            
                }
            }
            else if (decoded && !hasFlag(decoded.info.kind)) {
                console.log(`ignore ${decoded.info.kind}`)
                return; // ignore packet type
            }

            const ps = packets.slice(0, packets.length < maxItems ? packets.length : maxItems)
            ps.unshift(pkt)
            setPackets(ps)
        }
    ))
    // clear when consoleMode changes
    useEffect(() => {
        setPackets([])
    }, [consoleMode, JSON.stringify(flags)])

    const togglePaused = () => setPaused(!paused)
    const clearPackets = () => setPackets([])
    const handleModes = (event: React.MouseEvent<HTMLElement>, newFlags: string[]) => {
        setFlags(newFlags)
    };
    return (
        <Grid container>
            <List dense={true}>
                <ListItem key="filters">
                    <ButtonGroup>
                        <IconButton title="start/stop recording packets" onClick={togglePaused}>{paused ? <PlayArrowIcon /> : <PauseIcon />}</IconButton>
                        <IconButton title="clear all packets" onClick={clearPackets}><ClearIcon /></IconButton>
                    </ButtonGroup>

                    <ToggleButtonGroup value={flags} onChange={handleModes}>
                        <ToggleButton title={"console mode"} value={"console"}><GradientIcon /></ToggleButton>
                        {allKinds().map(kind => <ToggleButton title={kindName(kind)} value={kind}><KindIcon kind={kind} /></ToggleButton>)}
                        <ToggleButton title={"all announce"} value={"announce"}><AnnouncementIcon /></ToggleButton>
                    </ToggleButtonGroup>
                </ListItem>
                {packets?.map(packet => consoleMode ? <ConsoleListItem key={'csl' + packet.key} packet={packet} />
                    : <PacketListItem
                        key={'pkt' + packet.key}
                        packet={packet}
                        skipRepeatedAnnounce={skipRepeatedAnnounce}
                        showTime={showTime} />)}
            </List>
        </Grid>
    )

}
