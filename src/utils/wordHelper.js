export const evaluateGuess = (guess, solution) =>{
    const statusArray = Array(5).fill("");

    guess.split("").forEach((letter, index)=>{
        if(letter === solution[index]){
            statusArray[index] = "correct";
        }else if(solution.includes(letter)){
            statusArray[index] = "present";
        }else{
            statusArray[index]= "absent"
        }
    })

    return statusArray;
}