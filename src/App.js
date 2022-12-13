import './App.css';
import {useState} from "react";
import {MainMenuComponent} from "./components/MainMenuComponent/main-menu-component";
import {dataLevels} from './data'
import {QuizContainerComponent} from "./components/QuizContainerComponent/quiz-container-component";


const App = () => {
    const data = dataLevels;
    const [level, setLevel] = useState('');
    const [questionIndex, setQuestionIndex] = useState(0);

    const [score, setScore] = useState(0);
    const [right, setRight] = useState(0);
    const [failure, setFailure] = useState(0);

    const setLevelEvent = (e) => {
        setLevel(e.target.value);
    };

    const nextQuestion = () => {
        console.log(`next`);
        // data.length - 1 = index poslednego elementa
        // if (dataBeginner[questionIndex].correctAnswer === selectedIndex) {
        //     setScore(score +1 )
        // };
        // if (dataMidle[questionIndex].correctAnswer === selectedIndex) {
        //     setScore(score +1 )
        // };
        // setQuestionIndex(questionIndex + 1);
        // } else {
        //     alert("NEPRAVILNO");
        // }

    };

    const previousQuiestion = () =>{
        console.log(`previous`);
    }

    return (
        <div>
            {!level ? <MainMenuComponent handleChange={setLevelEvent}></MainMenuComponent> : null}
            {level ? <QuizContainerComponent
                nextQuestion={nextQuestion}
                previousQuiestion={previousQuiestion}
                data={data}
                level={level}
            ></QuizContainerComponent> : null}
        </div>
    );
};

export default App;
