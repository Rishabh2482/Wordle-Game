import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';
import { useCallback, useEffect} from 'react';
import { useWordleGame } from './hooks/useWordleGame';
import KeyBoard from './Components/Keyboard';
import PopUp from './Components/Popup';
function App(){

    const {
        handleKeyPress,
        resetGame,
        guesses,
        solution,
        currentRow,
        hint,
        gameOver,
        message,
    } = useWordleGame();
    
    const handleKeyDown = useCallback((event) =>{
        const key = event.key.toLowerCase();
        handleKeyPress(key);
    },[handleKeyPress]);

    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown);
        return ()=> {
            window.removeEventListener('keydown', handleKeyDown);
        }
    },[handleKeyDown])
    // console.log(solution)
    return(
        <div className='app'>
            <div className='game-area'>
                <Header/>
                <Board guesses={guesses} solution={solution} currentRow={currentRow}/>
                <div className='hint'>
                    <strong>Hint: </strong> {hint}
                </div>
            </div>
            <KeyBoard />

            {gameOver && <PopUp 
                message = {message}
                onReplay= {resetGame}
            />}
        </div>
    )
}


export default App;