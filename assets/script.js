// quiz questions //  
var questions = [{
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onclick", "onmouseclick", "onchange", "onmouseover"],
    answer: "onclick"
},
{
    title: "How do you create a function in JavaScript?",
    choices: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
    answer: "function myFunction()"
},
{
    title: " How do you write an IF statement for executing code if 'i' is NOT equal to 5?",
    choices: ["if (i != 5)", "if i <> 5", "if i =! 5 then", "if (i <> 5)"],
    answer: "if (i != 5)"
},
{
    title: "How do you round the number 7.25, to the nearest integer?",
    choices: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)", "rnd(7.25)"],
    answer: "Math.round(7.25)"
},
{
    title: "What will the following code return: Boolean(10 > 9)",
    choices: ["true", "false", " N/A", "NaN"],
    answer: "true"
}
]


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
        endTimer(); 
    }
}, 1000);   

next(); 

}







