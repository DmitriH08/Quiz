import React from 'react';


function AudioComponent({ logo,music,containerStyles}) {
    return (


        <div style={containerStyles}>
            <img style={{width:"100%", height:"100%"}}  src={logo}></img>
            <audio autoPlay src={music}></audio>
        </div>
    );


}
export default AudioComponent;
