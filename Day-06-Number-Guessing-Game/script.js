const guess = document.getElementById("guess");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const randomNumber = Math.floor(Math.random()*100)+1;

let attempts = 0;

checkBtn.addEventListener("click",()=>{
    if(!guess.value){
        alert("Guess a Number First!!!");
        return;
    }
    attempts++;
    const userGuess = Number(guess.value);
    attemptsText.textContent = `Attempts : ${attempts}`;
    
    if (userGuess === randomNumber) {
        message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    }
    else if(userGuess < randomNumber){
        message.textContent =  "📉 Too Low! Try Again";
    }
    else{
        message.textContent = "📈 Too High! Try Again";
    }
    guess.value = "";
})