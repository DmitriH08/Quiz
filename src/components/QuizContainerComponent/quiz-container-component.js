import React, {useState} from "react";

export const QuizContainerComponent = ({data, level,handleChange,scoreChange,endQuiz }) => {
    // v uslovii metoda filter, level dolzen sootvetstvoovat levelu kotorij vibral user. Object v metode level eto object massiva
    const dataByLevel = data.filter(object => object.level === level);
    const questionsCount = dataByLevel.length;
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('')
    const setUserAnswerEvent = (e,answerIndex) => {
        // pri vibore chekboxa uznaem chto polzavatel vibral(otvet- (e.target.value))
        setUserAnswer(e.target.value)
        // setAnswerIndex otmechaet pravilnij checkbox
        setAnswerIndex(answerIndex)


    }
    const nextQuestionEvent = (correctAnswer) => {
        setQuestionIndex(questionIndex + 1);
        if (userAnswer === correctAnswer){
            scoreChange()
        }
        if ((questionIndex +1)  === questionsCount){
            endQuiz()
        }
    }


    const previousQuestionEvent = () => {
        //peredacha ot dochernego k roditelskomu ('')
        if (questionIndex === 0) {
            handleChange('')
            }

        setQuestionIndex(questionIndex - 1);
    }

    return (
        <div>
            {/*questionIndex = 0, no kogda mi nazimaem na sled vopros to index menaetsa na +1, i zastavljaet komponentu pererisovatsa, t.k menjaetsa state*/}
            {dataByLevel.map((item, i) =>
                // esli quiestionIndex sovpodaet s indexom voprosa (element massiva), to on risuet nuznie voprosi
                ( questionIndex === i ?
                <div key={item.id}>
                    <div className="header">
                         <div className="top">
                            <div className="modal">
                                <h1>{item.title}</h1>
                            </div>
                            <h1 className="task-box">{item.question}</h1>
                            <div className="answer-box">
                                 {/*el - eto massiv otvetov kotorie mi vivodim iz massiva strokami */}
                                {item.answer.map((answer, index) =>
                                    <div key={index}>
                                        <label htmlFor={index.toString()}><h2>{answer}</h2></label>
                                        {/*Primer onChange: .addEventListener('click'/change, setUserAnswerEvent(e.target.value, index))
                                        v dannom sluchae (e) eto callback functia*/}
                                        <input checked={index === answerIndex} value={answer}
                                               onChange={(e) => setUserAnswerEvent(e,index)} id={index}
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
