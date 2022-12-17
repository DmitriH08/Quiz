import React from "react";
export const ResultComponent = ({score,handleChange,}) => {
    const tryAgainEvent = () => {
        if (score >=0 ){
            handleChange('')
        }
    }
    return (
        <div className="header">
            <div className="top">
                <div className="modal"><h1></h1>
                </div>
                <h1 className="task-box">Your Score is {score} / 6 </h1>
                <div className="button-box">
                    <button onClick={tryAgainEvent}>Try Again!</button>
                    <button>Show me correct answers!</button>
                    <button>Go to next level</button>
                </div>
            </div>
        </div>
    )
}
