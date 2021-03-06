// quiz questions //  

var questions = [{
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onmouseclick", "onchange", "onmouseover", "onclick"],
    answer: "onclick"},
{
    title: "How do you create a function in JavaScript?",
    choices: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
    answer: "function myFunction()"},
{
    title: " How do you write an IF statement for executing code if 'i' is NOT equal to 5?",
    choices: ["if (i != 5)", "if i <> 5", "if i =! 5 then", "if (i <> 5)"],
    answer: "if (i != 5)"},
{
    title: "How do you round the number 7.25, to the nearest integer?",
    choices: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "rnd(7.25)"],
    answer: "Math.round(7.25)"},
{
    title: "What will the following code return: Boolean(10 > 9)",
    choices: ["true", "false", " N/A", "NaN"],
    answer: "true"}]

//variable for score, current question, time countdown, and the timer

var score = 0;
var currentQuestion = -1;
var timeCountdown = 0;
var timer;

//this will start the timer @ 75 seconds once the 'start quiz' button is clicked

function start() {
timeCountdown = 75;
document.getElementById("timeCountdown").innerHTML = timeCountdown;
timer = setInterval(function() {
timeCountdown--;
document.getElementById("timeCountdown").innerHTML = timeCountdown;

//this will stop the timer from going negative after it reaches 0
    if (timeCountdown <= 0) {
        clearInterval(timer);
        endTimer();}
    }, 1000);   

next();}

function endTest() {
    clearInterval(timer);

// var to to display final score ask test taker if they'd like to record their final score
var quizContent = `
<h2>End of Quiz</h2>
<h3>You scored ` + score +  ` /100!</h3>

<input type="text" id="name" placeholder="Initials"> 
<button onclick="setScore()">Record your score</button>`;

document.getElementById("quizMain").innerHTML = quizContent;
}

//need to set up local storage to store high scores

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}

function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    <button onclick="resetTest()">Try Again</button>`;
    document.getElementById("quizMain").innerHTML = quizContent;}
   
// resets the quiz and allows test taker to try again

function resetTest() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeCountdown = 0;
    timer = null;
    document.getElementById("timeCountdown").innerHTML = timeCountdown;
   
    var quizContent = `
    <h1>Coding Quiz Challenge</h1>
    <h3>Try to answer the follwoing questions within the time limit. </h3>
    <h3>Keep in mind that incorrect answers will penalize your score/time </h3>          
    <h3>by ten seconds!. </h3>
    <button onclick="start()">Start Quiz</button>`;
    document.getElementById("quizMain").innerHTML = quizContent;}

//function to subtract 10s from the countdown timer if quesstion is answered incorrectly

function incorrect() {
    timeCountdown -= 10; 
    next();}
    
//awards test taker 20 points for a correct answer.  5 questions @ 20pts =100%

function correct() {
    score += 20;
    next();}
    
// if/else loops

function next() {
    currentQuestion++;
    if (currentQuestion > questions.length - 1) {
        endTest();
        return;
    }
    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"
    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }

    document.getElementById("quizMain").innerHTML = quizContent;
}



    