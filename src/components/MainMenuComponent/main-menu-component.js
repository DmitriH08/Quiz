import React from "react";
import AudioComponent from "../AudioCoomponent/AudioComponent";
export const MainMenuComponent = ({handleChange, levelsList,waitingImage}) => {
    // handleChange - eto event kotoroe javlaetsa callback funkciej i kotoraja mozet peredavat evenet ot rebenka k roditelju
    // v nawem sluchae on peredaet event v App js
    return (
        <div className="header">
            <div className="top">
                <div className="modal"><h1>Welcome to Quiz of Heroes 3 + HotA</h1>
                </div>
                <h1 className="task-box">Choose Your level!</h1>
                <div className="button-box">
                    {/*levelsList - massiv knopok(urovnej) kotorie teper zapisanni v odnu peremennuju. */}
                    {/*Posle mi vizivaem ih po indexu, izhodja iz togo chto viberet user*/}

                    {!waitingImage ?  levelsList.map((item, index) => (
                        <button className="button1" key={item} onClick={() => handleChange(item, index)} value={item}><h2 className="btnText"> {item.toUpperCase()}</h2> </button>
                    )) : <AudioComponent></AudioComponent>
                    }

                </div>

            </div>
        </div>
    )
}
