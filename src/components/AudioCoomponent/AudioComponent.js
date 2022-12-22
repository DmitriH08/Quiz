import React from 'react';
import logo from "../../images/Waiting.gif";
import mp3 from "../../playlist/newDay.mp3";
import victory from "../../playlist/Victory.mp3";
import logo2 from "../../images/Victory.gif";
function AudioComponent({isVictory}) {

    return (
    <div className="waitingImg">
        <img style={{width:"100%", height:"100%"}} src={isVictory ? logo : logo2} ></img>
        <audio className="NewDay" autoPlay src={isVictory ?  mp3 : victory}></audio>
    </div>

    );
}


export default AudioComponent;