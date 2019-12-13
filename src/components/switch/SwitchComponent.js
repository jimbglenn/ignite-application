import React from "react";
import Switch from 'react-input-switch';
import "./SwitchComponent.scss";

export default function SwitchComponent(props) {
    return <div className="switchDiv">
                <Switch
                    value={props.lightOn}
                    onChange={value => props.setLightStatus(value)}
                />
            </div>;
}