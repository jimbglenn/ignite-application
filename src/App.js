import React, {useState} from 'react';
import RoomComponent from './components/room/RoomComponent';
import SwitchComponent from "./components/switch/SwitchComponent";
import "./App.scss";

function App() {
    const [lightOn, setLightOn] = useState(0);

    return (
        <div className="application">
            <div className="leftContent">
                <SwitchComponent lightOn={lightOn} setLightStatus={setLightOn}/>
            </div>
            <div className="rightContent">
                <RoomComponent lightOn={lightOn}/>
            </div>
        </div>
    );
}

export default App;
