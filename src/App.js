import './App.css';
import { useState } from "react";
import {MainMenu} from "./MainMenu/MainMenu.js";
import {dataLevels} from "./dataLevels.js";
import { RenderComponents } from './MainMenu/RenderComponents.js';




 const App = () => {
   const data = dataLevels

   const [level, setLevel] = useState('');
   // na (e) toest v 'argument' mi
   const setLevelEvent = (e) => {
       console.log(e)
       setLevel(e.target.value);
       const selectedIndex = data.id
       const [score, setScore] = useState(0);
       const [questionIndex, setQuestionIndex] = useState(0);
       const nextQuestion = (selectedIndex) => {

       };
       const previousQuestion = (selectedIndex) => {

       }
       setQuestionIndex(questionIndex - 1);
   }

       // const startQuizBeg = () => {
       //   if (setQuestionIndex(1) === true) {
       //     // setScore(score +1)
       //   };
       // }
       // const startQuizMid = () => {
       //   if (setQuestionIndex(1) === true) {
       //     // setScore(score +1)
       //   };
       // }
       //
       //
       // const previousQuestion = () => {
       //   // console.log(`1,2,3`);
       //   setQuestionIndex(questionIndex - 1)
       // }


       // tut mi otrisovivaem ves  componenti, no suda mi zapisivaem propsi (lelvel, data)
       return (
           <div>

             {!level ? <MainMenu handleChange={setLevelEvent}></MainMenu> : null}
             {level ? <RenderComponents>
               data={data}
               level={level}

             </RenderComponents> : null}
             {/* // title={dataBeginner[questionIndex].title}
        // question={dataBeginner[questionIndex].question}
        // previousQuiestion={previousQuiestion}
        // nextQuestion={nextQuestion}
        // startQuizBeg={startQuizBeg}
        // answer={dataBeginner[questionIndex].answer}
        // lastElement={questionIndex === dataBeginner.length - 1}
        // score={score}
        // dataBeginner={dataBeginner}  */}


           </div>

       );
 }
   export default App;


