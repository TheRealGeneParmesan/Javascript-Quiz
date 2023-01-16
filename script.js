//Had to add window.onload because I was getting an error that would persist with addevent listener. ElementbyId returning null before it executes before the DOM fully loads. 
window.onload = function () {
    var startButton = document.getElementById('start-btn')
    var timer = document.getElementById('timer')


    // Event listener that hopefully starts the timer and the game on the click of startgame. 
    startButton.addEventListener('click', startGame, startTime)



    // Start game function which starts the game when you click it. 
    function startGame() {
        console.log('Started')
    }

    // Start time function that initializes after you click the start game button. 

    function startTime() {
        timer.innerHTML = 'Time: ' + secs;
        seconds++;

        console.log('Timed')

    }
}


// Creating an event listener for when I click the start button, which will begin the quiz.
// Create a timer that starts when I click start and am prestented with a question.
// If I answer the question incorrectly, I subtract time from the clock.
// Code something that tells me when all of the questions are answered or the timer hits 0 that the game is over.
// Ask for initials and give final score. 


// Created a variable for questions and initialized it to an array. 

var quizQuestions = [
    {
        question: "Commonly used data types do not include:",
        answer: {
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