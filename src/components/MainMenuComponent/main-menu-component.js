import React from "react";

export const MainMenuComponent = ({handleChange, levelsList}) => {
    // handleChange - eto event kotoroe javlaetsa callback funkciej i kotoraja mozet peredavat evenet ot rebenka k roditelju
    // v nawem sluchae on peredaet event v App js
    return (
        <div className="header">
            <div className="top">
                <div className="modal"><h1>Welcome to Quiz of Heroes 3 + Hota</h1>
                </div>
                <h1 className="task-box">Choose Your level!</h1>
                <div className="button-box">
                    {levelsList.map((item, index) => (
                        <button key={item} onClick={() => handleChange(item, index)} value={item}>{item.toUpperCase()}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}
