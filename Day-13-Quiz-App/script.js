const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

const quiz = [
    {
        question:"Which language is used for web pages?",
        options:["Python","Java","JavaScript","C++"],
        answer:"JavaScript"
    },

    {
        question:"Which HTML tag creates a heading?",
        options:["<div>","<h1>","<p>","<span>"],
        answer:"<h1>"
    },

    {
        question:"Which CSS property changes text color?",
        options:["font-size","background","color","display"],
        answer:"color"
    }

];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){
    question.textContent = quiz[currentQuestion].question;

    options.forEach((btn,index)=>{
        btn.textContent = quiz[currentQuestion].options[index];

        btn.onclick = ()=>{

            if(btn.textContent === quiz[currentQuestion].answer){
                score++;
            }

            nextBtn.style.display = "block";

            options.forEach(button=>{
                button.disabled = true;
            });

        };

        btn.disabled = false;

    });

    nextBtn.style.display = "none";
}

nextBtn.addEventListener("click",()=>{
    currentQuestion++;

    if(currentQuestion < quiz.length){
        loadQuestion();
    }else{
        question.textContent =  `🎉 Quiz Finished! Your Score: ${score}/${quiz.length}`;

        document.querySelector(".options").style.display="none";
        nextBtn.style.display="none";
    }
});

loadQuestion();