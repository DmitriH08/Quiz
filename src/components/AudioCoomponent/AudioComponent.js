import React from 'react';
import mp3 from "../../playlist/newDay.mp3";
import victory from "../../playlist/Victory.mp3";
import logo2 from "../../images/Victory.gif";
function AudioComponent({isVictory, logo,mp3}) {

    return (
    <div className="waitingImg">
        <img style={{width:"100%", height:"100%"}} src={logo} ></img>
        <audio className="NewDay" autoPlay src={mp3}></audio>
    </div>

    );
}


export default AudioComponent;