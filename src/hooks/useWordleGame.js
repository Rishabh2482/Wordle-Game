import {Words} from '../data/wordList';
import { useState } from 'react';

export const useWordleGame = ()=>{

    const [wordObject, setWordObject] = useState(
        Words[Math.floor(Math.random() * (Words.length))]
    );
    const [guesses, setGusses] = useState(["","","","","",""]);
    const [solution, setSolution] = useState(wordObject.word);
    const [currentRow, setCurrentRow] = useState(0);
    const [hint, setHint] = useState(wordObject.hint);
    const [gameOver, setgameOver] = useState(false);
    const [message, setMessage] = useState('');

    const handleKeyPress = (key) =>{
        if(gameOver) return;

        const normalizedKey = key.toLowerCase();    // convert the key into lowercase

        // handling enter key press
        if(normalizedKey === 'enter'){
            if(guesses[currentRow].length !==5){
                return;
            }

            if(guesses[currentRow] === solution){
                setMessage("You Guessed it Right! ");
                setgameOver(true);
                return;
            }

            if(currentRow === 5){
                setMessage("Game is Over the word is "+ `${solution.toLocaleUpperCase()}`);
                setgameOver(true);
                return;
            }

            setCurrentRow((prevRow)=>{
                return prevRow+1;
            })
            setMessage("");
            return;
        }

        // handling backspace key press
        if(normalizedKey === 'backspace'){
            setGusses((previousGuesses)=>{
                const updatedGuesses = [...previousGuesses];    // destructuring the guesses array, with setState we get previousState value by default.
                updatedGuesses[currentRow] = updatedGuesses[currentRow].slice(0,-1);
                return updatedGuesses;
            })
            return;
        }

        // handling alphabate key press
        if(/^[a-z]$/.test(normalizedKey)){
            setGusses((previousGuesses)=>{
                const updatedGuesses = [...previousGuesses];    // destructuring the guesses array, with setState we get previousState value by default.
                if(updatedGuesses[currentRow].length<5){
                    updatedGuesses[currentRow] += normalizedKey;
                }
                return updatedGuesses;
            })
            return;
        }
    }

    const resetGame = () =>{
        const newwordObject = Words[Math.floor(Math.random() * (Words.length))];
        setWordObject(newwordObject);
        setSolution(newwordObject.word);
        setHint(newwordObject.hint);
        setGusses(["","","","","",""]);
        setCurrentRow(0);
        setMessage('')
        setgameOver(false)
    }

    return {
        handleKeyPress,
        resetGame,
        guesses,
        solution,
        currentRow,
        hint,
        gameOver,
        message,
        wordObject
    };
}