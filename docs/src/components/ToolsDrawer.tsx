import React, { useContext } from "react";
import { Drawer, makeStyles, createStyles, List, ListItemIcon, ListItemText, Typography, ListItem } from "@material-ui/core";
import { IconButton, Link } from "gatsby-theme-material-ui";
// tslint:disable-next-line: no-submodule-imports
import { TOOLS_DRAWER_WIDTH } from "./layout";
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import DrawerContext, { } from "./DrawerContext";
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import EditIcon from '@material-ui/icons/Edit';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const useStyles = makeStyles((theme) => createStyles({
    drawer: {
        width: TOOLS_DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: TOOLS_DRAWER_WIDTH,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }
}));

export default function ToolsDrawer() {
    const classes = useStyles()
    const { toolsMenu, setToolsMenu } = useContext(DrawerContext)
    const handleDrawerClose = () => {
        setToolsMenu(false)
    }

    return <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={toolsMenu}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
            </IconButton>
        </div>
        <List>
            <Link to="/tools/updater">
                <ListItem button key="updater">
                    <ListItemIcon><SystemUpdateAltIcon /></ListItemIcon>
                    <ListItemText primaryTypographyProps={({ color: "textPrimary" })} primary={"Firmware update"} />
                </ListItem>
            </Link>
            <Link to="/tools/namer">
                <ListItem button key="collector">
                    <ListItemIcon><EmojiObjectsIcon /></ListItemIcon>
                    <ListItemText primaryTypographyProps={({ color: "textPrimary" })} primary={"Device Namer"} />
                </ListItem>
            </Link>
            <Link to="/tools/collector">
                <ListItem button key="collector">
                    <ListItemIcon><FiberManualRecordIcon /></ListItemIcon>
                    <ListItemText primaryTypographyProps={({ color: "textPrimary" })} primary={"Data collection"} />
                </ListItem>
            </Link>
            <Link to="/tools/player">
                <ListItem button key="player">
                    <ListItemIcon><PlayArrowIcon /></ListItemIcon>
                    <ListItemText primaryTypographyProps={({ color: "textPrimary" })} primary={"Replay packet trace"} />
                </ListItem>
            </Link>
            <Link to="/tools/service-editor">
                <ListItem button key="service-editor">
                    <ListItemIcon><EditIcon /></ListItemIcon>
                    <ListItemText primaryTypographyProps={({ color: "textPrimary" })} primary={"Service specification editor"} />
                </ListItem>
            </Link>
        </List>
    </Drawer>
}