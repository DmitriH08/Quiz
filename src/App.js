import './App.css';
import {useState} from "react";
import {MainMenuComponent} from "./components/MainMenuComponent/main-menu-component";
import {dataLevels} from './data'
import {QuizContainerComponent} from "./components/QuizContainerComponent/quiz-container-component";


const App = () => {
    const data = dataLevels;
    // pustaja stroka s useState - iznachalnoe znachenie levela
    const [level, setLevel] = useState('');
    const [questionIndex, setQuestionIndex] = useState(0);
    const [tryAgain, setTryAgain] = useState('');
    const [score, setScore] = useState(0);
    const [right, setRight] = useState(0);
    const [failure, setFailure] = useState(0);

    // setLevelEvent prinimaet sobitie kotoroe peredaetsa v (e),  v nawem sluchae e - element v kotorom proizowlo sobitie
    // Toest mi menjaem state levela s pustoj stroki na znachenie kotoroe vibral user i komponenta pererisovivaetsa
    const setLevelEvent = (e) => {
        setLevel(e.target.value);
    };
    const setTryAgainEvent = (e) =>{
        setLevel(e);
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
            {/*esli net urovnja to u nas pustaja srtoka ili ee net toest 'null, a esli est to u nas vivoditsa komponenta s voprosami izhodja ot levela*/}
            {/*   props  handleChange idet v dochernuju komponentu a to chto sprava (setLevelEvent) idet v roditelskuju t.e v App.js*/}
            {!level ? <MainMenuComponent handleChange={setLevelEvent}></MainMenuComponent> : <QuizContainerComponent
                // data i level - mi peredaem dannie v vide props v komponentu
                data={data}
                // level - pervichnij state urovnja kotorij poluchili iz MainMenu i peredaem v QuizContainer
                level={level}
                handleChange={setTryAgainEvent}
            ></QuizContainerComponent> }
                }
            {/*    esli est level to risuetsa voprosi s otvetami i td*/}

        </div>
    );
};

export default App;
