// quiz questions //  
var questions = [{
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>( )", "<javascript>( )", "<js>( )", "<script>( )"],
        answer: "script( )"
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function myFunction()( )", "function = myFunction()( )", "function:myFunction()( )"],
        answer: "function myFunction()"
    },
    {
        title: " How do you write an IF statement for executing code if 'i' is NOT equal to 5?",
        choices: ["if (i != 5)( )", "if i <> 5( )", "if i =! 5 then( )", "if (i <> 5)"],
        answer: "if (i != 5)( )"
    },
    {
        title: "How can you add a comment in a JavaScript?",
        choices: ["//This is a comment( )", "<!--This is a comment-->( )", "This is a comment( )"],
        answer: "splice( )"
    },
    {
        title: "What will the following code return: Boolean(10 > 9)",
        choices: ["true( )", "false( )", " N/A( )", "NaN( )"],
        answer: "true( )"
    }
]


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
            endGame(); 
        }

}

