import React from "react";
import LightComponent from "../light/LightComponent";
import "./RoomComponent.scss";

export default function RoomComponent(props) {
    return <div className={"room " + (props.lightOn ? "lightOn" : "lightOff")}>
                <LightComponent lightOn={props.lightOn}/>
            </div>;
}