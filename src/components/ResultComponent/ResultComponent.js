import React, {useState} from "react";
export const ResultComponent = ({score,handleChange, data, level, levelIndexButton, lastIndex, openNewLevel}) => {
    const dataByLevel = data.filter(object => object.level === level);
    const [isCorrectAnswersList, setCorrectAnswersList] = useState(false);

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
                    <button onClick={() => setCorrectAnswersList(!isCorrectAnswersList)}>Show me correct answers!</button>
                    {levelIndexButton !== lastIndex ? <button onClick={openNewLevel}>Go to next level</button> : null}
                </div>
                <div className={'results-container'}>
                    <ul>
                        {isCorrectAnswersList ? dataByLevel.map((data) => (
                            <li key={data.id}>
                                <p className="result-question">{data.question}</p>
                                <p className="result-answer">{data.correctAnswer}</p>
                            </li>
                        )) : null}
                    </ul>
                </div>

            </div>
        </div>
    )
}
