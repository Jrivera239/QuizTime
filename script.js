let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-Quiz");
const TimerEl = document.getElementById("Timer");
let questionCount;
let scoreCount = 0;
let count = 60;
let countdown;
var c = 45



//questions and array//

const quizArray = [
  {
    id: "1",
    question: "If the mass of the sun is about 333,000 times the mass of the Earth.", options:["Earth is smaller","Earth is bigger","Sun is bigger","Sun is smaller"], correct:"Sun is bigger"
  },
  {
    id: "2",
 question:"What is black outside and yellow inside?" ,
 options:["Tennis Ball","Avocado","Bowl","Ninja Chick"], correct:"Ninja Chick"
},
{
    id: "3",
 question:"What happened to Dinosaurs?" ,
 options:["They playing hide and seek", "They were extinct","Starve to death","T-Rex ate them all"], correct:"They were extinct",
},
{
    id: "4",
 question:"Where is air come from?" ,
 options:["Animals", "Humans","Trees","Water"], correct:"Trees",
},
];

//Restart//
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
  
    questionCount += 1;

    if (questionCount == quizArray.length) {

      //hide question//
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");

      //score//
      userScore.innerHTML =
        "You scored  " + scoreCount + " out of " + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";

 //timer//
 
      quizDisplay(questionCount);
      count = 60;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

// display  //
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");


  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  // display card//
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation//
function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);

  for (let i of quizArray) {
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");


    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";


    //question//
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);


    // score //
    const Score_Point = 100
    const Max_Question = 4

    startGame = () => {
        questionCounter = 0
        score = 0
        availableQuestions = [...questions]
        getNewQuestion()

    }

    getNewQuestion = () => {
        if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTION) { localStorage.setItem('mostRecenScore', score)

        }

    }
    // options //
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    <button class="option-div" onclick="checker(this)">${i.options[4]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

// Checker Function to check if option is correct or not //
function checker(userOption) {
  let userPlayer = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  // if user clicked answer == correct option stored in object//
  if (userPlayer === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
  //disable all after answer//
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup//
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 60;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//click to start //
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//start screen//
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
