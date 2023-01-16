//Had to add window.onload because I was getting an error that would persist with addevent listener. ElementbyId returning null before the DOM fully loads. 
window.onload = function () {
    var startButton = document.getElementById('start-btn')
    var timer = document.getElementById('timer')
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
        startButton.style.display = 'none'
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

    // Showing the question and iterating through questions and answers. Assigning answer buttons and question buttons. 

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

function tallyScores() {

}

// If I answer the question incorrectly, I subtract time from the clock.
// Code something that tells me when all of the questions are answered or the timer hits 0 that the game is over.
// Ask for initials and give final score. 


// Created a variable to store questions and initialized it using an array. 
// Another way to maybe show the correct answer is by adding another variable for correct variable underneath the questions. 

var quizQuestions = [
    {
        question: "Commonly used data types do not include:",
        answer: [
            { A: "Strings", correct: false },
            { B: "Booleans", correct: false },
            { C: "Alerts", correct: true },
            { D: "Numbers", correct: false },
        ]

    },

    {
        question: "Arrays in Javascript can be used to store _______",
        answer: [
            { A: "Numbers and strings", correct: false },
            { B: "Other arrays", correct: false },
            { C: "Booleans", correct: false },
            { D: "All of the above", correct: true },

        ]
    },

    {

        question: "String values must be enclosed within when being assigned to variables _____ ",
        answer: [

            { A: "Commas", correct: false },
            { B: "Curly brackets", correct: false },
            { C: "Quotes", correct: true },
            { D: "Parentheses", correct: false },

        ]
    },

    {
        question: "The condition in an if/else statement is enclosed with _______ when being assigned to variables ",
        answer: [
            { A: "Quotes", correct: false },
            { B: "Curly brackets", correct: false },
            { C: "Parentheses", correct: false },
            { D: "Square brackets", correct: true },
        ]
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is :",
        answer: [
            { A: "Terminal/bash", correct: false },
            { B: "Javascript", correct: false },
            { C: "For loops", correct: false },
            { D: "Console.log", correct: true },
        ]
    }
]
