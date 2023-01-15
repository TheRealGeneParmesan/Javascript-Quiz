var startbutton = document.getElementById('start-btn')

startbutton.addEventListener('click', startGame)

function startgame() {
    console.log('Started')
}


// Creating an event listener for when I click the start button, which will begin the quiz.
// Create a timer that starts when I click start and am prestented with a question.
// If I answer the question incorrectly, I subtract time from the clock.
// Code something that tells me when all of the questions are answered or the timer hits 0 that the game is over.
// Ask for initials and give final score. 


// Global variables. Creating a variable to store the questions for the quiz. 

var quizQuestions = [{

    q: "Commonly used data types do not include:",
    a: {
        1: "Strings",
        2: "Booleans",
        3: "Alerts",
        4: "Numbers"

    },


    q: "Arrays in Javascript can be used to store _______",

    a: {

        1: "Numbers and strings",
        2: "Other arrays",
        3: "Booleans",
        4: "All of the above",



    },

    q: "String values must be enclosed within when being assigned to variables _____ ",

    1: "Commas",
    2: "Curly brackets",
    3: "Quotes",
    4: "Parentheses",



    q: "The condition in an if/else statement is enclosed with _______ when being assigned to variables ",
    a: {
        1: "Quotes",
        2: "Curly brackets",
        3: "Parentheses",
        4: "Square brackets",
    },


    q: "A very useful tool used during development and debugging for printing content to the debugger is :",

    1: "Terminal/bash",
    2: "Javascript",
    3: "For loops",
    4: "Console.log",

}]