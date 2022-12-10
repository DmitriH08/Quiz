import './App.css';
import {useState} from "react";
import Beginner from  './CardBoxBeginner/Beginner';
import Midle from './CardBoxMidle/Midle';


const App = () => {

    const dataBeginner = 
        [
            {
                title: "QUIZ of Heroes of M & M 3 + Hota",
                question: ''
            },
            {
                title: "Beginner lvl Qestion 1",
                question: 'Which unit is more powerful?',
                answer: [`Archangel`, `Black Dragon`,`Titan`, `Lazure Dragon`],
                correctAnswer: 3,
            },
            {
                title: "Qestion 2",
                question: 'How many gold/day gives you  a capitol?',
                answer: [`3000`, `5000`,`4000`, `40000,`],
                correctAnswer: 2,

            },
            {
                title: "Qestion 3",
                question: 'Chose the name of heroe, who have default spell - lightning chain?',
                answer: [`Sandro`, `Solmir`,`Xeron`, `Jog,`],
                correctAnswer: 1,
            },
            {
                title: "Qestion 4",
                question: 'Which "Town" gives you ability to have a double-mana?',
                answer: [`Tower`, `Castle`,`Dungen`, `Inferno,`],
                correctAnswer: 2,
            },
            {
                title: "Qestion 5",
                question: 'How many items you need to combine a Statue of Legion?',
                answer: [`5`, `6`,`7`, `4,`],
                correctAnswer: 0,
            },
            {
                title: "Qestion 6",
                question: 'Which artifacte gives you "explosion" spell into your spellbock?',
                answer: [`Wizard's Well`, `Crown of Dragontooth`,`Helm of Chaos`, `Spellbinder's Hat`],
                correctAnswer: 3,
            },
            {
              title: "END QIUZ",
              question: '',
              
          },
        ]
    const dataMidle = 
        [
            {
                title: "QUIZ of Heroes of M & M 3 + Hota",
                question: ''
            },
            {
                title: "Beginner lvl Qestion 1",
                question: 'Which unit is more powerful?',
                answer: [`Archangel`, `Black Dragon`,`Titan`, `Lazure Dragon`],
                correctAnswer: 3,
            },
            {
                title: "Qestion 2",
                question: 'How many gold/day gives you  a capitol?',
                answer: [`3000`, `5000`,`4000`, `40000,`],
                correctAnswer: 2,

            },
            {
                title: "Qestion 3",
                question: 'Chose the name of heroe, who have default spell - lightning chain?',
                answer: [`Sandro`, `Solmir`,`Xeron`, `Jog,`],
                correctAnswer: 1,
            },
            {
                title: "Qestion 4",
                question: 'Which "Town" gives you ability to have a double-mana?',
                answer: [`Tower`, `Castle`,`Dungen`, `Inferno,`],
                correctAnswer: 2,
            },
            {
                title: "Qestion 5",
                question: 'How many items you need to combine a Statue of Legion?',
                answer: [`5`, `6`,`7`, `4,`],
                correctAnswer: 0,
            },
            {
                title: "Qestion 6",
                question: 'Which artifacte gives you "explosion" spell into your spellbock?',
                answer: [`Wizard's Well`, `Crown of Dragontooth`,`Helm of Chaos`, `Spellbinder's Hat`],
                correctAnswer: 3,
            },
            {
              title: "END QIUZ",
              question: '',
              
          },
        ]
    

    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
        
    const nextQuestion = (selectedIndex) => {
      // data.length - 1 = index poslednego elementa
            if (dataBeginner[questionIndex].correctAnswer === selectedIndex) {
                setScore(score +1 )
             };
            if (dataMidle[questionIndex].correctAnswer === selectedIndex) {
                setScore(score +1 )
             };
                setQuestionIndex(questionIndex + 1); 
            // } else {
            //     alert("NEPRAVILNO");
            // } 
          
      };

    const startQuizBeg = () => {
       if (setQuestionIndex(1) === true){
        // setScore(score +1)
       };
          }
    const startQuizMid = () => {
       if (setQuestionIndex(1) === true){
        // setScore(score +1)
       };
          }
          
   
      const previousQuiestion = () =>{
        // console.log(`1,2,3`);
        setQuestionIndex(questionIndex-1)
      }  
      
        
// tut mi otrisovivaem ves Card component, no suda mi zapisivaem propsi 
    return (
      <div> 
        
            <Beginner 
                    title={dataBeginner[questionIndex].title}
                    question = {dataBeginner[questionIndex].question}
                    previousQuiestion = {previousQuiestion}
                    nextQuestion = {nextQuestion}
                    startQuizBeg = {startQuizBeg}
                    answer = {dataBeginner[questionIndex].answer}
                    lastElement = {questionIndex === dataBeginner.length - 1}
                    score = {score}
                    data = {dataBeginner}
            
                />
            <Midle 
                    title={dataMidle[questionIndex].title}
                    question = {dataMidle[questionIndex].question}
                    previousQuiestion = {previousQuiestion}
                    nextQuestion = {nextQuestion}
                    startQuizMid = {startQuizMid}
                    answer = {dataMidle[questionIndex].answer}
                    lastElement = {questionIndex === dataMidle.length - 1}
                    score = {score}
                    data = {dataMidle}
                
                />
          
        
</div>
    );
};

export default App;
