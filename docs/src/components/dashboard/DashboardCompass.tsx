import React, { } from "react";
import { DashboardServiceProps } from "./DashboardServiceWidget";
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue";
import SvgWidget from "../widgets/SvgWidget";
import useWidgetTheme from "../widgets/useWidgetTheme";
import useServiceHost from "../hooks/useServiceHost";
import useWidgetSize from "../widgets/useWidgetSize";
import { useId } from "react-use-id-hook"
import { Grid, Slider } from "@material-ui/core";
import SensorServiceHost from "../../../../src/hosts/sensorservicehost";
import { CompassReg } from "../../../../src/jdom/constants";

export default function DashboardCompass(props: DashboardServiceProps) {
    const { service, services, variant } = props;

    const headingRegister = service.register(CompassReg.Heading);
    const [heading] = useRegisterUnpackedValue<[number]>(headingRegister)

    const host = useServiceHost<SensorServiceHost<[number]>>(service);
    const color = host ? "secondary" : "primary";
    const { background, controlBackground, active } = useWidgetTheme(color)
    const widgetSize = useWidgetSize(variant, services.length)

    if (heading === undefined)
        return null;

    const w = 64
    const h = 64
    const mw = 5
    const r = (w >> 1) - 4;
    const sw = 3;
    const cx = w >> 1
    const cy = h >> 1
    const sp = 1;

    const handleChange = async (ev: unknown, newValue: number | number[]) => {
        await host?.reading.setValues([newValue as number])
        headingRegister.refresh()
    }
    const valueDisplay = (angle: number) => `${Math.round(angle)}°`;

    return <Grid container direction="column">
        <Grid item xs={12}>
            <SvgWidget width={w} height={h} size={widgetSize}>
                <circle cx={w >> 1} cy={h >> 1} r={r} fill={controlBackground}
                    stroke={background} strokeWidth={sw} />
                <g transform={`rotate(${heading}, ${w >> 1}, ${h >> 1})`}>
                    <path d={`M ${cx - mw} ${cy + sp / 2} l ${mw} ${r} l ${mw} ${-r} z`} 
                        fill={background} stroke={background} strokeWidth={sp} />
                    <path d={`M ${cx - mw} ${cy - sp / 2} l ${mw} ${-r} l ${mw} ${r} z`} 
                        stroke={background} fill={active} strokeWidth={sp} />
                </g>
            </SvgWidget >
        </Grid>
        {host && <Grid item>
            <Slider
                color={color}
                valueLabelDisplay="auto"
                valueLabelFormat={valueDisplay}
                min={0} max={360} step={1} value={heading}
                onChange={handleChange}
                aria-label="heading"
            />
        </Grid>}
    </Grid>
}