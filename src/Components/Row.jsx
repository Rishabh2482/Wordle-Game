import Tile from "./Tile";
import {evaluateGuess} from "../utils/wordHelper"

function Row({guess,solution,isActiveRow}){

    const statusOfTitles = evaluateGuess(guess, solution);

    return (
        <div className={`row ${isActiveRow? 'current' : ''} `}>
            {Array.from({length:5}).map((letter, index) => (
                <Tile 
                    key={index}
                    letter={guess[index]}
                    status={statusOfTitles[index]}
                />
            ))}
        </div>
    )
}

export default Row;