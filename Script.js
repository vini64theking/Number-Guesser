
const answer = Math.floor(Math.random() *10 + 1);
let guesses = 0;
document.getElementById("submit").onclick = function(){ 
    
    let temp = document.getElementById("text").value;
    guesses += 1;

    if(temp == answer) {
        alert(`${answer} is the number. it took you ${guesses} guesses.`);
    }
    else if (temp < answer) {
        alert('Too small');
    }
    else {
        alert('too large');
    }
};