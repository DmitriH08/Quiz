import React from 'react';


function AudioComponent({ logo,music,logoVictory,score}) {
    return (
    <div>
        {score !== 100 ?
        <div>
            <img id="waitingImg" value="start" src={logo}></img>
        </div> :
        <div>
            <img id="Victory" value="pobeda" src={logoVictory}></img>
        </div>
        }
        <audio autoPlay src={music}></audio>
    </div>
    );


}
export default AudioComponent;
