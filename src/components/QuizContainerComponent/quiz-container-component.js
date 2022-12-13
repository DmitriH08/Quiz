import React, {useState} from "react";

export const QuizContainerComponent = ({data, level, nextQuestion, previousQuiestion}) => {
    const dataByLevel = data.filter((el) => el.level === level);
    const questionsCount = dataByLevel.length;
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(0);

    const nextQuestionEvent = () => {
        setQuestionIndex(questionIndex + 1);
    }

    const previousQuestionEvent = () => {
        if (!questionIndex) {
            return;
        }
        setQuestionIndex(questionIndex - 1);
    }

    return (
        <div>
            {dataByLevel.map((item, i) =>
                ( questionIndex === i ?
                <div key={item.id}>
                    <div className="header">
                         <div className="top">
                            <div className="modal">
                                <h1>{item.title}</h1>
                            </div>
                            <h1 className="task-box">{item.question}</h1>
                            <div className="answer-box">
                                {item.answer.map((el, index) =>
                                    <div key={index}>
                                        <label htmlFor={index.toString()}><h2>{el}</h2></label>
                                        <input checked={index === answerIndex} value={el}
                                               onChange={() => setAnswerIndex(index)} id={index}
                                               type="checkbox"/>
                                    </div>
                                )}
                            </div>
                            <div className="button-box">
                                <button onClick={previousQuestionEvent} className="button1">
                                    <h2 className="btnText">Previous Quiestion</h2>
                                </button>
                                <button onClick={nextQuestionEvent} className="button2">
                                    <h2 className="btnText">Next Quiestion</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                : null)
            )}
        </div>
    )
}
