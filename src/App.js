import './App.css';
import { useState } from "react";
import MainMenu from "./MainMenu/MainMenu";
import dataLevels from "./data";
import { RenderComponents } from './MainMenu/RenderComponents';



const App = () => {
const data = dataLevels

const [level, setLevel] = useState('');
const setLevelEvent = (e) => {
  setLevel(e.target.value);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = (selectedIndex) => {
    // data.length - 1 = index poslednego elementa
    if (dataBeginner[questionIndex].correctAnswer === selectedIndex) {
      setScore(score + 1)
    };
    if (dataMidle[questionIndex].correctAnswer === selectedIndex) {
      setScore(score + 1)
    };
    setQuestionIndex(questionIndex + 1);
    // } else {
    //     alert("NEPRAVILNO");
    // } 

  };

  const startQuizBeg = () => {
    if (setQuestionIndex(1) === true) {
      // setScore(score +1)
    };
  }
  const startQuizMid = () => {
    if (setQuestionIndex(1) === true) {
      // setScore(score +1)
    };
  }


  const previousQuiestion = () => {
    // console.log(`1,2,3`);
    setQuestionIndex(questionIndex - 1)
  }


  // tut mi otrisovivaem ves Card component, no suda mi zapisivaem propsi (lelvel, data)
  return (
    <div>

      {!level ? <MainMenu handleChange ={setLevelEvent}></MainMenu> : null }
      {level ? <RenderComponents data = {data} level = {level}></RenderComponents> : null}
        {/* // title={dataBeginner[questionIndex].title}
        // question={dataBeginner[questionIndex].question}
        // previousQuiestion={previousQuiestion}
        // nextQuestion={nextQuestion}
        // startQuizBeg={startQuizBeg}
        // answer={dataBeginner[questionIndex].answer}
        // lastElement={questionIndex === dataBeginner.length - 1}
        // score={score}
        // dataBeginner={dataBeginner}  */}

     
      {/* <Midle
        title={dataMidle[questionIndex].title}
        questionMid={dataMidle[questionIndex].questionMid}
        previousQuiestion={previousQuiestion}
        nextQuestion={nextQuestion}
        startQuizMid={startQuizMid}
        answer={dataMidle[questionIndex].answer}
        lastElement={questionIndex === dataMidle.length - 1}
        score={score}
        dataMidle={dataMidle}

      /> */}


    </div>
  
  );
};

export default App;
