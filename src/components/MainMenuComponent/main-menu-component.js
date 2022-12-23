import React from "react";
import AudioComponent from "../AudioCoomponent/AudioComponent";
import logo from "../../images/Waiting.gif";
import mp3 from "../../playlist/newDay.mp3"
export const MainMenuComponent = ({handleChange, levelsList,waitingImage}) => {
    const waitingImgStyle = { width: "380px", height: "260px", justifyContent: "center", alignItems: "center",
        margin:"0 auto"}
    return (
        <div className="header">
            <div className="top">
                <div className="modal"><h1>Welcome to Quiz of Heroes 3 + HotA</h1>
                </div>
                <h1 className="task-box">Choose Your level!</h1>
                <div className="button-box">
                    {!waitingImage ?  levelsList.map((item, index) => (
                        <button className="button1" key={item} onClick={() => handleChange(item, index)} value={item}><h2 className="btnText"> {item.toUpperCase()}</h2> </button>
                    )) :<div id="waitingImg"><AudioComponent containerStyles={waitingImgStyle} music={mp3} logo={logo}></AudioComponent></div>
                    }
                </div>
            </div>
        </div>
    )
}
