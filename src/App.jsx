import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';
import { useState } from 'react';
import { Words } from './data/wordList';
import KeyBoard from './Components/Keyboard';
function App(){

    const [wordObject, setWordObject] = useState(
        Words[Math.floor(Math.random() * (Words.length))]
    );
    const [gusses, setGusses] = useState(["qwrty","","","","",""]);
    const [solution, setSolution] = useState(wordObject.word);
    // console.log(solution)
    return(
        <div className='app'>
            <div className='game-area'>
                <Header/>
                <Board gusses={gusses} solution={solution}/>
                
            </div>
            <KeyBoard />
        </div>
    )
}


export default App;