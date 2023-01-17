//Had to add window.onload because I was getting an error that would persist with addevent listener. ElementbyId returning null before the DOM fully loads. 
window.onload = function () {
    var startButton = document.getElementById('start-btn')
    var timer = document.getElementById('timer')
    var questionElement = document.getElementById('question')
    var answerButtonsElement = document.getElementsByClassName('btn')
    var timerCount = 65


    // Event listener that starts the timer and the game on the click of startgame. 
    startButton.addEventListener('click', startQuiz)
    startButton.addEventListener('click', startTime)




    // Start game function which starts the game when you click it. 
    function startQuiz() {
        console.log('Game on')
        startButton.style.display = 'none'
        firstQuestion()
    }


    // After starting game, have to go to the first question.
    function firstQuestion() {
        showQuestion(quizQuestions[0])
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

    // Showing the question and iterating through questions and answers. Assigning answer buttons and question buttons. 

    function showQuestion(currentQuestion) {
        questionElement.innerText = currentQuestion.question
        for (var i = 0; i < 4; i++) {
            console.log(i)
            answerButtonsElement[i].innerText = currentQuestion.answer[i]
            answerButtonsElement[i].addEventListener("click", chooseAnswer(currentQuestion))
        }
    }


    // Function to highlight selected answer and determine whether it is right or wrong. If statement maybe? 


    function chooseAnswer(currentQuestion) {
        var userAnswer = ''
        var numCorrect = 0;

        for (var i = 0; i < question.length, i++;) {

            userAnswer = (currentQuestion.answer[i]);

            if (userAnswer === question[i].correctAnswer) {

                numCorrect++;


                console.log('answer chosen')
            }


        }
    }


    function goBack() {

    }

    function clearHighScore() {

    }

    function tallyScores() {
        resultsContainer.innerHTML = numCorrect + 'out of' + question.length;
    }

    // If I answer the question incorrectly, I subtract time from the clock.
    // Code something that tells me when all of the questions are answered or the timer hits 0 that the game is over.
    // Ask for initials and give final score. 


    // Created a variable to store questions and initialized it using an array. 
    // Another way to maybe show the correct answer is by adding another variable for correct variable underneath the questions. 

    var quizQuestions = [
        {
            question: "Commonly used data types do not include:",
            answer: {
                0: "Strings",
                1: "Booleans",
                2: "Alerts",
                3: "Numbers",
            },
            correctAnswer: "2"

        },

        {
            question: "Arrays in Javascript can be used to store _______",
            answer: {
                0: "Numbers and strings",
                1: "Other arrays",
                2: "Booleans",
                3: "All of the above",

            },
            correctAnswer: "3"

        },

        {

            question: "String values must be enclosed within when being assigned to variables _____ ",
            answer: {

                0: "Commas",
                1: "Curly brackets",
                2: "Quotes",
                3: "Parentheses"

            },
            correctAnswer: "2"
        },

        {
            question: "The condition in an if/else statement is enclosed with _______ when being assigned to variables ",
            answer: {
                0: "Quotes",
                1: "Curly brackets",
                2: "Parentheses",
                3: "Square brackets",
            },
            correctAnswer: "2"
        },

        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is :",
            answer: {
                0: "Terminal/bash",
                1: "Javascript",
                2: "For loops",
                3: "Console.log",
            },
            correctAnswer: "3"
        }
    ]
}