import React from 'react';
import logo from "../../images/Waiting.gif";
import mp3 from "../../playlist/newDay.mp3";
function AudioComponent(props) {

    return (
    <div>
        <img className="waitingImg">src={logo}></img>
        <audio className="NewDay" autoPlay src={mp3}></audio>
    </div>
    );
}

export default AudioComponent;