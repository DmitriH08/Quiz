import React from "react";

export const MainMenuComponent = ({handleChange}) => {
    // handleChange - eto event kotoroe javlaetsa callback funkciej i kotoraja mozet peredavat evenet ot rebenka k roditelju
    // v nawem sluchae on peredaet event v App js
    return (
        <div className="header">
            <div className="top">
                <div className="modal"><h1></h1>
                </div>
                <h1 className="task-box"></h1>
                <div className="button-box">
                    <button onClick={handleChange} value={'beginner'}>Beginner</button>
                    <button onClick={handleChange} value={'middle'}>Middle</button>
                    <button onClick={handleChange} value={'master'}>Master</button>
                    <button onClick={handleChange} value={'hardcore'}>Hardcore</button>
                </div>
            </div>
        </div>
    )
}
