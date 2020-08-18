import React, { useState } from 'react';
// tslint:disable-next-line: no-submodule-imports
import Tabs from '@material-ui/core/Tabs';
// tslint:disable-next-line: no-submodule-imports
import Tab from '@material-ui/core/Tab';
import { serviceSpecificationFromClassIdentifier } from '../../../src/dom/spec';
import { Paper, createStyles, makeStyles, Theme } from '@material-ui/core';
import TabPanel, { a11yProps } from './TabPanel';
import Snippet from './Snippet';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginBottom: theme.spacing(1)
    },
    pre: {
        margin: "0",
        padding: "0",
        backgroundColor: "transparent",
        whiteSpec: "pre-wrap"
    }
}));

export default function ServiceSpecificationSource(props: { classIdentifier: number }) {
    const { classIdentifier } = props;
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const spec = serviceSpecificationFromClassIdentifier(classIdentifier)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper square>
                <Tabs value={value} onChange={handleChange} aria-label="View specification formats">
                    <Tab label="Markdown" {...a11yProps(0)} />
                    <Tab label="JSON" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Snippet value={spec.source} mode="markdown" /> 
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Snippet value={JSON.stringify(spec, null, 2)} mode="json" /> 
                </TabPanel>
            </Paper>
        </div>
    );
}
