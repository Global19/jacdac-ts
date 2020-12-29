import React, { useEffect } from "react"
import { createMuiTheme, createStyles, responsiveFontSizes } from "@material-ui/core";
import ThemedLayout from "../../components/ThemedLayout";
import MakeCodeEditorExtension from "../../components/makecode/MakeCodeEditorExtension"
import { makeStyles, Container, Hidden, Box, Paper, Button } from '@material-ui/core';
import PaperBox from "../../components/PaperBox";
import Flags from "../../../../src/jdom/flags";
import DeviceList from "../../components/DeviceList"
import RoleManager from "../../components/RoleManager";

const useStyles = makeStyles((theme) => createStyles({
    content: {
        display: 'flex',
        minHeight: '100vh',
        minWidth: '10rem',
        flexDirection: 'column',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexGrow: 1
    },
}));

export default function Page() {
    const rawTheme = createMuiTheme({
        palette: {
            primary: {
                main: '#2e7d32',
            },
            secondary: {
                main: '#ffc400',
            },
        }
    })
    const classes = useStyles();
    const theme = responsiveFontSizes(rawTheme);
    useEffect(() => {
        Flags.webUSB = false;
    }, [])
    return <ThemedLayout theme={theme}>
        <div className={classes.content}>
            <PaperBox>
                <MakeCodeEditorExtension />
            </PaperBox>
            <RoleManager />
        </div>
    </ThemedLayout>
}