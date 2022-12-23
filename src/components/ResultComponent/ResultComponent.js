import React, {useState} from "react";
import logoVictory from  '../../images/Victory.gif';
import music from '../../playlist/Victory.mp3'
import AudioComponent from "../AudioCoomponent/AudioComponent";

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
                <div className="modal"><h1>End of Quiz</h1>
                </div>
                <h1 className="scoreTask-box">{score !== 6 ? null : <div id="Victory"><AudioComponent
                    music={music}
                    logoVictory={logoVictory}
                ></AudioComponent></div>} Your Score is {score} / 6 </h1>
                <div className="result-btns">
                    <button className="button1" onClick={tryAgainEvent}><h2 className="btnText">Try Again!</h2></button>
                    <button className="button1" onClick={() => setCorrectAnswersList(!isCorrectAnswersList)}><h2 className="btnText">Show me correct answers!</h2></button>
                    {levelIndexButton !== lastIndex ? <button className="button1" onClick={openNewLevel}><h2 className="btnText">Go to next level</h2></button> : null}
                </div>
                <div className="results-container">
                    <ul>
                        {isCorrectAnswersList  ? dataByLevel.map((data) => (
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
