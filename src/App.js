import {useState} from "react";
import {MainMenuComponent} from "./components/MainMenuComponent/main-menu-component";
import {dataLevels} from './data'
import {QuizContainerComponent} from "./components/QuizContainerComponent/quiz-container-component";
import {ResultComponent} from "./components/ResultComponent/ResultComponent";
import {AudioComponent} from "./components/AudioCoomponent/AudioComponent";
import './App.css';

const App = () => {
    const data = dataLevels;
    const levelsList = ['beginner', 'middle', 'master', 'hardcore'];
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
            {!level ? <MainMenuComponent
                    levelsList={levelsList}
                    waitingImage={waitingImage}
                    handleChange={setLevelEvent}>
                </MainMenuComponent> :
                <QuizContainerComponent
                data={data}
                level={level}
                handleQuestionIndex={(e) => setQuestionIndex(e)}
                questionIndex={questionIndex}
                scoreChangeNext={setScoreEvent}
                scoreChangeBack={backScoreEvent}
                handleChange={setTryAgainEvent}
                endQuiz={endQuizEvent}

            ></QuizContainerComponent> }
                }
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
