const quizDisplay = document.getElementById("display");
let timeLeft = document.querySelector(".time-left");
let qizConstainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector("number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer= document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("User-Score");
let startScreen = document.getElementById ("start-screen");
let startButton = document.getElementById ("start-button");
let questionCount;
let scoreCount = 0;
let count = 15;
let countdown;


// Options array and questions//

const quizArray = [{id: "0",
 question:"If the mass of the sun is about 333,000 times the mass of the Earth.", options:["Earth is smaller","Earth is bigger","Sun is bigger","Sun is smaller"], correct:"Sun is bigger"
},
{
    id: "1",
 question:"What is black outside and yellow inside?" ,
 options:["Tennis Ball","Avocado","Bowl","Ninja Chick"], correct:"Ninja Chick"
},
{
    id: "2",
 question:"What happened to Dinosaurs?" ,
 options:["They playing hide and seek", "They were extinct","Starve to death","T-Rex ate them all"], correct:"They were extint",
},
];

//Time//
const timerDisplay = () => {
    countdown = setInterval (() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0){
            clearInterval(countdown);
            displayNext();
        }

    }, 1000);
}


//    //
const quizDisplay =(questionCount) => {
    let quizDisplay = document.querySelectorAll(".conainer_mid");
// Hiding Cards//
quizCards.forEach((card) => {
    card.classList.add ("hide");

});

quizCards[questionCount].classList.remove("hide");

}


//Creation//

function quizCreator(){

    quizArray.sort(()=> Math.random() -0.5);
    // //
    for(let i of quizArray){
        // //
        i.options.sort(() => Math.random() -0.5);
        // //
        let div = document.createElement("div");
        div.classList.add("contaner-mid"; "hide");
        // //
        countOfQuestion.innerHTML = 1+ " of "+ quizArray.length+" Question ";
        // //
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        // // 
        div.apprenChild(question_DIV);

        div.innerHTML += `
        <button class= "option-div" onclick="checker (this)">${i.options[0]}</button>
        <button class= "option-div" onclick="checker (this)">${i.options[1]}</button>
        <button class= "option-div" onclick="checker (this)">${i.options[2]}</button>
        <button class= "option-div" onclick="checker (this)">${i.options[4]}</button>
        `;
        quizContainer.apprenChild(div);
    }
}
// //
function initial (){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 15;
    quizCreator();
    quizDisplay(questionCount);
}

// //
startButton.addEventListener("click",() => {
    startScreen.classList.add("hide");
    startScreen.classList.remove 
    initial ();
}
// hiding quiz and display//

window.onload = () => {
    
    displayContainer.classList.add ('hide');
 
});

