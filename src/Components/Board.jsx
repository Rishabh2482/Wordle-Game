import Row from "./Row";

function Board({gusses , solution}) {
    return(
        <div className="board">

        {gusses.map( (guess , rowIndex)=> {
            return <Row 
                        key={rowIndex}
                        guess ={guess}
                        solution ={solution}
                    />
        })
        }
        </div>
    )
}

export default Board;