//Had to add window.onload because I was getting an error that would persist with addevent listener. ElementbyId returning null before it executes before the DOM fully loads. 
window.onload = function () {
    var startButton = document.getElementById('start-btn')
    var timer = document.getElementById('timer')
    var questionContainerElement = document.getElementById('question-container')
    var questionElement = document.getElementById('question')
    var answerButtonsElement = document.getElementById('answer-buttons')


    // Event listener that hopefully starts the timer and the game on the click of startgame. 
    startButton.addEventListener('click', startGame)
    startButton.addEventListener('click', startTime)



    // Start game function which starts the game when you click it. 
    function startGame() {
        console.log('Started')
        setNextQuestion()
    }

    // Start time function that initializes after you click the start game button. 

    function startTime() {
        window.setInterval(startTime, 1000);
        timer.innerHTML = 'Time: ' + '65 seconds';
        console.log('Timed')

    }

    function showQuestion(question) {
        questionElement.innertext = question.question
    }

    function selectAnswer() {

    }

    function setNextQuestion() {


    }
}



// Creating an event listener for when I click the start button, which will begin the quiz.
// Create a timer that starts when I click start and am prestented with a question.
// If I answer the question incorrectly, I subtract time from the clock.
// Code something that tells me when all of the questions are answered or the timer hits 0 that the game is over.
// Ask for initials and give final score. 


// Created a variable to store questions and initialized it using an array. 

var quizQuestions = [
    {
        question: "Commonly used data types do not include:",
        answer: [
            { 1: "Strings", correct: false },
            { 2: "Booleans", correct: false },
            { 3: "Alerts", correct: true },
            { 4: "Numbers", correct: false },
        ]

    },

    {
        question: "Arrays in Javascript can be used to store _______",
        answer: [
            { 1: "Numbers and strings", correct: false },
            { 2: "Other arrays", correct: false },
            { 3: "Booleans", correct: false },
            { 4: "All of the above", correct: true },

        ]
    },

    {

        q: "String values must be enclosed within when being assigned to variables _____ ",

        answer: [

            { 1: "Commas", correct: false },
            { 2: "Curly brackets", correct: false },
            { 3: "Quotes", correct: true },
            { 4: "Parentheses", correct: false },

        ]
    },

    {
        question: "The condition in an if/else statement is enclosed with _______ when being assigned to variables ",
        answer: [
            { 1: "Quotes", correct: false },
            { 2: "Curly brackets", correct: false },
            { 3: "Parentheses", correct: false },
            { 4: "Square brackets", correct: true },
        ]
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is :",

        answer: [
            { 1: "Terminal/bash", correct: false },
            { 2: "Javascript", correct: false },
            { 3: "For loops", correct: false },
            { 4: "Console.log", correct: true },
        ]
    }
]