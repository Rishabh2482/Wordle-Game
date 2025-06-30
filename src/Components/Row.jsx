import Tile from "./Tile";

function Row({guess,solution}){
    return (
        <div className="row">
            {Array.from({length:5}).map((letter, index) => (
                <Tile 
                    key={index}
                    letter={guess[index]}
                />
            ))}
        </div>
    )
}

export default Row;