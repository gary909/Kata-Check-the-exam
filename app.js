function checkExam(array1, array2) {
    let myScore = 0 // keep score
    for(let i = 0; i < array1.length; i++){
        if(array1[i] == array2[i]){ // compare and score...
            myScore = myScore + 4;
        } else if (array1[i] != array2[i] && array2[i] == ""){
            myScore = myScore + 0;
        } else {
            myScore = myScore -1 ;
        }
    } // Check if result is < 0
    if(myScore < 0){
        return 0;
    } else {
        return myScore;
    }
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])); // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])); // 0