var startButton = document.querySelector(".start-quiz");
var answerButtons = document.querySelectorAll(".choice")
var inGameTimer = document.querySelector(".timer-count");
var scoreText = document.querySelector("#score");
var progressBarFull = document.querySelector("#progressBarFull");
var highScoresButton = document.querySelector(".highScoresButton");
var timer, secondsLeft;
var question = document.querySelector(".question");
var submitButton = document.getElementById("submit");
var homeButton = document.getElementById("home")
var userName = document.getElementById("userName");
var startingPage = document.querySelector(".starting-page");
var gameStart = document.querySelector("#game-start");
var highScores = document.querySelector(".highScores");
var score = 0;
var scoreElement = document.querySelector("#score");
var yourScore = document.querySelector(".yourScore");
var enterHighScores = document.querySelector(".enterHighScores");

var greenAnswer = document.querySelector('.correct');
var redAnswer = document.querySelector('incorrect');
var enterHighScoresBtn = document.querySelector('.homeScore');
var submitHighScoreBtn = document.querySelector('.submitScore');


if (!localStorage.getItem("numberOfHighScores")) { 
    localStorage.setItem("numberOfHighScores", 0);
}

var questions = [
    {
        question: "Commonly used data types DO not include:",
        choice0: 'alerts',
        choice1: 'booleans',
        choice2: 'strings',
        choice3: 'numbers',
        correctAnswer: 0
    },
    {
        question: "A useful tool used during development and debugging for printing content to the debugger is?",
        choice0: 'JavaScript',
        choice1: 'for loops',
        choice2: 'console.log',
        choice3: 'terminal/bash',
        correctAnswer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        choice0: 'numbers and strings',
        choice1: 'other arrays',
        choice2: 'booleans',
        choice3: 'all of the above',
        correctAnswer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed with __________.",
        choice0: 'quotes',
        choice1: 'parenthesis',
        choice2: 'curly brackets',
        choice3: 'square brackets',
        correctAnswer: 1
    },
    {
        question: "String values must be enclused with ________ when being assigned to variables.",
        choice0: 'commas',
        choice1: 'curley brackets',
        choice2: 'quotes',
        choice3: 'parenthesis',
        correctAnswer: 2
    },
];

var availableQuestions;
var questionCounter = 0;
var secondsLeft = 60;

answerButtons.forEach(el => el.addEventListener('click', function (e) {
    var answerIndex = e.target.getAttribute("data-number")
    var currentQuestion = questions[questionCounter];
    if (answerIndex == currentQuestion.correctAnswer) {
        score += 20;
        
        
    }
    else {
        secondsLeft -= 5;
        score += 10

        // subtract time
    }
    scoreElement.innerText = score;
    questionCounter++
    if (questionCounter >= questions.length) {
        localStorage.setItem('mostRecentScore', score);

        //console.log("should be done")
        // stop timer
        gameOver()
        return

    }
    getNewQuestion()
    // console.log(answerIndex);
}
));

const SCORE_POINTS = 100;

// add score tracker

startButton.addEventListener("click", function () {
    startingPage.style.visibility = "hidden";
    gameStart.style.visibility = "visible";
    highScores.style.visibility = "hidden";
    enterHighScores.style.visibility = "hidden";
    questionCounter = 0;
    score = 0;
    getNewQuestion()
}
)
getNewQuestion = () => {

    progressText.innerText = `Question ${questionCounter} of ${questions.length}`;
    progressBarFull.style.width = `${(questionCounter / questions.length) * 100}%`;

    currentQuestion = questions[questionCounter];
    question.innerText = currentQuestion.question;

    answerButtons.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })


    acceptingAnswers = true
}

highScoresButton.addEventListener("click", function () {
    startingPage.style.visibility = "hidden";
    gameStart.style.visibility = "hidden";
    highScores.style.visibility = "visible";
    enterHighScores.style.visibility = "hidden";

    showHighScores()
    homeButton = !highScoresButton.value;
    if (homeButton) {
        
    }
});


submitButton.addEventListener('click', function(){
    if (!localStorage.getItem("highScore0")){
        localStorage.setItem("highScore0", userName.value + " " + score);
    }
    else if (!localStorage.getItem("highScore1")){
        localStorage.setItem("highScore1", userName.value + " " + score)
    }
    else {
        localStorage.setItem("highScore2", userName.value + " " + score)
    }
    startingPage.style.visibility = "hidden";
    gameStart.style.visibility = "hidden";
    highScores.style.visibility = "hidden";
    enterHighScores.style.visibility = "visible";
    showHighScores();

})

function countdown() {
    secondsLeft = 60;
    timer = setInterval(function () {
        secondsLeft--;
        inGameTimer.textContent = secondsLeft;

        if (secondsLeft === 0) {

            gameOver()

        }
    }, 1000);
}

function playGame() {
    countdown();

}

function returnHome() {
    startingPage.style.visibility = "visible";
    gameStart.style.visibility = "hidden";
    highScores.style.visibility = "hidden";
    enterHighScores.style.visibility = "hidden";
}

function gameOver() {
    startingPage.style.visibility = "hidden";
    gameStart.style.visibility = "hidden";
    highScores.style.visibility = "hidden";
    enterHighScores.style.visibility = "visible";
    yourScore.innerText = score;

    
    clearInterval(timer);

}



 // add click handler to enter high score button 
    // get the current high score count 
    //x=localstorage.getItem("numberofHighScores")
    /// set loocalStorage.setItem("highScore"+ x, username + " " + score)
    // increment localStorage.getItem("numberOfHighScores") by 1
    // x += 1
    // localStorage.setItem("numberofhighscores", x)
    // showHighScores() 
function showHighScores() {
    console.log("gettingHIghScores");
    startingPage.style.visibility = "hidden";
    gameStart.style.visibility = "hidden";
    highScores.style.visibility = "visible";
    enterHighScores.style.visibility = "hidden";
    var highScore0el = document.getElementById("highScore0");
    var highScore0 = localStorage.getItem("highScore0");
    var highScore1el = document.getElementById("highScore1");
    var highScore1 = localStorage.getItem("highScore1");
    var highScore2el = document.getElementById("highScore2");
    var highScore2 = localStorage.getItem("highScore2");
    highScore0el.innerText = highScore0;
    highScore1el.innerText = highScore1;
    highScore2el.innerText = highScore2;

}
// local storage
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

})



startButton.addEventListener("click", playGame);
homeButton.addEventListener("click", returnHome);
