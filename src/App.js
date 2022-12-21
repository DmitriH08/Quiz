import './App.css';
import {useState} from "react";
import {MainMenuComponent} from "./components/MainMenuComponent/main-menu-component";
import {dataLevels} from './data'
import {QuizContainerComponent} from "./components/QuizContainerComponent/quiz-container-component";
import {ResultComponent} from "./components/ResultComponent/ResultComponent";
import {AudioComponent} from "./components/AudioCoomponent/AudioComponent";

const App = () => {
    const data = dataLevels;
    const levelsList = ['beginner', 'middle', 'master', 'hardcore'];
    // pustaja stroka s useState - iznachalnoe znachenie levela
    const [level, setLevel] = useState('');
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [levelIndexButton, setLevelIndexButton] = useState(0);
    const [result, setResult] = useState(false)
    const [waitingImage,setWaitingImage] = useState(false);
    const setScoreEvent = () =>{
        setScore(score + 1)
    }
    const backScoreEvent = () =>{
        setScore(score -1)
    }
    const endQuizEvent = () =>{
        setResult(true)
    }
    // setLevelEvent prinimaet sobitie kotoroe peredaetsa v (e),  v nawem sluchae e - element v kotorom proizowlo sobitie
    // Toest mi menjaem state levela s pustoj stroki na znachenie kotoroe vibral user i komponenta pererisovivaetsa
    const setLevelEvent = (e, index) => {
        setWaitingImage(true)
        setTimeout(()=> {
            setLevel(e);
            setLevelIndexButton(index);
            reset();
            setWaitingImage(false)
        },2800)
    };
    const setTryAgainEvent = (e) =>{
        setLevel(e);
        setLevelIndexButton(0)
        reset();
    };

    const openNextLevel = () => {
        setLevelIndexButton(levelIndexButton + 1);
        const newLevel = levelsList.at(levelIndexButton + 1);
        setLevel(newLevel);
        reset();
    }

    const reset = () => {
        setResult(false);
        setScore(0)
        setQuestionIndex(0)
    }


    return (
        <div>
            {/*esli net urovnja to u nas pustaja srtoka ili ee net toest 'null, a esli est to u nas vivoditsa komponenta s voprosami izhodja ot levela*/}
            {/*   props  handleChange idet v dochernuju komponentu a to chto sprava (setLevelEvent) idet v roditelskuju t.e v App.js*/}
            {!level ? <MainMenuComponent levelsList={levelsList}
                                         waitingImage={waitingImage}
                                         handleChange={setLevelEvent}></MainMenuComponent> : <QuizContainerComponent
                // data i level - mi peredaem dannie v vide props v komponentu
                data={data}
                // level - pervichnij state urovnja kotorij poluchili iz MainMenu i peredaem v QuizContainer
                level={level}
                handleQuestionIndex={(e) => setQuestionIndex(e)}
                questionIndex={questionIndex}
                scoreChangeNext={setScoreEvent}
                scoreChangeBack={backScoreEvent}
                handleChange={setTryAgainEvent}
                endQuiz={endQuizEvent}
            ></QuizContainerComponent> }
                }
            {/*    esli est level to risuetsa voprosi s otvetami i td*/}
            {result ?
            <ResultComponent
                openNewLevel={openNextLevel}
                lastIndex={levelsList.length - 1}
                levelIndexButton={levelIndexButton}
                level={level}
                data={data}
                handleChange={setTryAgainEvent}
                score = {score}
            ></ResultComponent> : null }
        </div>
    );
};

export default App;
