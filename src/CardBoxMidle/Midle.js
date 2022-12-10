import React, { useState } from 'react';


// vse to chto nize = poluechaem iz app.js v vide propsov
const Midle = ({ title, question, nextQuestion, startQuizMid, answer, previousQuiestion, lastElement, score, dataMidle }) => {
    console.log(question,lastElement);
    const [selectedIndex, setSelectedIndex] = useState();
    return (
        <div className="header">
            <div className="top">
                <div className="modal"> <h1>{title}</h1>
                </div>
                <h1 className="task-box">{question}</h1>

                <div>
                    {/* esli question = true, to vipolnica cod s 15-30stroku 
        esli = false , to vipolnica s 30-33 */}
                    {question ?
                        <div>
                            <div className="answer-box">
                                {/* item - eto element/ argument iz massiva answer */}
                                {answer.map((item, index) =>
                                    <div key={index}>
                                        {/* pri ispolzovanii inputov, v label neobhodimo ispolzovat index, no dlja etogo nado napisat htmlFor */}
                                        <label htmlFor={index} > <h2>{item}</h2></label>
                                        {/* tut objavili sobitie, v kotorom mi budem menjat sostojanie vibrannogo checkboxa . Id posle setSelectedIndex - dlja lablela*/}
                                        <input checked={index === selectedIndex} onChange={() => setSelectedIndex(index)} id={index} type="checkbox" />

                                    </div>

                                )

                                }   </div>
                            <div className="button-box">
                                <button onClick={() => previousQuiestion()} className="button1"><h2 className="btnText" >Previous Quiestion</h2></button>
                                <button onClick={() => nextQuestion(selectedIndex)} className="button2"><h2 className="btnText" >Next Quiestion</h2></button>
                            </div>
                        </div> :
                        <div> {!lastElement ? <button onClick={startQuizMid} > Midle </button> : <h2>Your Score: {score} / 6 
                        <button onClick={() => {}} className="showResult"><h2>Show all correct answers: </h2>
                        </button><p id ="arrRes" className="arrayResult"><br></br>
                             {dataMidle[1].answer[3]}, {dataMidle[2].answer[2]}, {dataMidle[3].answer[1]}, {dataMidle[4].answer[2]}, {dataMidle[5].answer[0]}, {dataMidle[6].answer[3]}</p>
                             <div  className="button-box"> 
                            <button onClick={startQuizMid} className="button1"><h2 className="btnText" >Try again</h2></button>
                            <button className="button2"><h2 className="btnText" >Try next level</h2></button> 
                            </div>
                            </h2> }
                            </div>


                    }

                </div>
            </div>
        </div>
    );

};

export default Midle;