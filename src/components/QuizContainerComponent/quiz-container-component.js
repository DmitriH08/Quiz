import React, {useState} from "react";

export const QuizContainerComponent = ({
                                           data,
                                           level,
                                           handleChange,
                                           scoreChangeBack,
                                           scoreChangeNext,
                                           endQuiz,
                                           questionIndex,
                                           handleQuestionIndex
                                       }) => {
    const dataByLevel = data.filter(object => object.level === level);
    const questionsCount = dataByLevel.length;
    const [answerIndex, setAnswerIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('')
    const setUserAnswerEvent = (e, answerIndex) => {
        setUserAnswer(e.target.value)
        setAnswerIndex(answerIndex)
    }

    const nextQuestionEvent = (correctAnswer) => {
        handleQuestionIndex(questionIndex + 1)
        if (userAnswer === correctAnswer) {
            scoreChangeNext()
        }
        if ((questionIndex + 1) >= questionsCount) {
            endQuiz()
        }
    }
    const previousQuestionEvent = () => {
        if (questionIndex === 0) {
            handleChange('')

        }
        handleQuestionIndex(questionIndex - 1)
        scoreChangeBack()
    }
    return (
        <div>
            {dataByLevel.map((item, i) =>
                (questionIndex === i ?
                    <div key={item.id}>
                        <div className="header">
                            <div className="top">
                                <div className="modal">
                                    <h1>{item.title}</h1>
                                </div>
                                <h1 className="task-box">{item.question}</h1>
                                <div className="answer-box">
                                    {item.answer.map((answer, index) =>
                                        <div key={index}>
                                            <label htmlFor={index.toString()}><h2>{answer}</h2></label>
                                            <input checked={index === answerIndex} value={answer}
                                                   onChange={(e) => setUserAnswerEvent(e, index)} id={index}
                                                   type="checkbox"/>
                                        </div>
                                    )}
                                </div>
                                <div className="button-box">
                                    <button onClick={previousQuestionEvent} className="button1">
                                        <h2 className="btnText">Previous Quiestion</h2>
                                    </button>
                                    <button onClick={() => nextQuestionEvent(item.correctAnswer)} className="button2">
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
