import React, {useState} from "react";

export const QuizContainerComponent = ({data, level, }) => {
    // v uslovii metoda filter, level dolzen sootvetstvoovat levelu kotorij vibral user. Object v metode level eto object massiva
    const dataByLevel = data.filter(object => object.level === level);
    const questionsCount = dataByLevel.length;
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(0);

    const nextQuestionEvent = () => {
        setQuestionIndex(questionIndex + 1);
    }

    const previousQuestionEvent = () => {
        //
        if (!questionIndex) {
            return;
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
                                 {/*el - eto otveti kotorie mi vivodim iz massiva strokami */}
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
