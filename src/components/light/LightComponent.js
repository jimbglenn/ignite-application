import React from "react";
import "./LightComponent.scss";

export default function LightComponent(props) {
    return <div className={"light " + (props.lightOn ? "lightOn" : "lightOff")}>&nbsp;</div>;
}