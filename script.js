//Had to add window.onload because I was getting an error that would persist with addevent listener. ElementbyId returning null before the DOM fully loads. 
window.onload = function () {
    var startButton = document.getElementById('start-btn')
    var timer = document.getElementById('timer')
    var questionContainerElement = document.getElementById('question-container')
    var questionElement = document.getElementById('question')
    var answerButtonsElement = document.getElementsByClassName('btn')
    var timerCount = 65

    let shuffledQuestions, currentQuestionIndex

    // Event listener that starts the timer and the game on the click of startgame. 
    startButton.addEventListener('click', startQuiz)
    startButton.addEventListener('click', startTime)



    // Start game function which starts the game when you click it. 
    function startQuiz() {
        console.log('Game on')
        startButton.classList.add('hide')
        nextQuestion()
    }

    // Start time function that initializes after you click the start game button. 

    function startTime() {

        var intervalID = setInterval(() => {
            if (timerCount <= 0) { clearInterval(intervalID) }
            timer.innerHTML = 'Time: ' + timerCount + ' seconds';
            timerCount--
        }, 1000);
        console.log('Timer on')

    }

    // After starting game, have to go to the next question and then after each answer need to go to the next answer. 

    function nextQuestion() {
        showQuestion(quizQuestions[0])
    }

    // Need to show the questions

    function showQuestion(question) {
        questionElement.innerText = question.question
        for (let i = 0; i < 4; i++) {
            console.log(i)
            answerButtonsElement[i].innerText = question.answer[i]
        }
    }
}

// Function to highlight selected answer and determine whether it is right or wrong. If statement maybe? 

function chooseAnswer() {

}

function goBack() {

}

function clearHigh() {

}


// Creating an event listener for when I click the start button, which will begin the quiz.
// Create a timer that starts when I click start and am prestented with a question.
// If I answer the question incorrectly, I subtract time from the clock.
// Code something that tells me when all of the questions are answered or the timer hits 0 that the game is over.
// Ask for initials and give final score. 


// Created a variable to store questions and initialized it using an array. 
// Another way to maybe show the correct answer is by adding another variable for correct variable underneath the questions. 

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

        question: "String values must be enclosed within when being assigned to variables _____ ",
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
