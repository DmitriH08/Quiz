import React from 'react';

function AudioComponent({ logo,music,}) {

    return (
    <div className="waitingImg">
        <img style={{width:"100%", height:"100%"}} src={logo} ></img>
        <audio className="NewDay" autoPlay src={music}></audio>
    </div>

    );
}


export default AudioComponent;