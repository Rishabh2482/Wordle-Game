import Row from "./Row";

function Board({guesses, solution, currentRow}) {
    // console.log(guesses);
    // console.log(solution);
    return(
        <div className="board">

        {guesses.map( (guess , rowIndex)=> {
            return <Row 
                        key={rowIndex}
                        guess ={guess}
                        solution ={solution}
                        isActiveRow = {currentRow===rowIndex}
                    />
            })
        }
        </div>
    )
}

export default Board;