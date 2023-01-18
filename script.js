//Had to add window.onload because I was getting an error that would persist with addevent listener. ElementbyId returning null before the DOM fully loads. 
window.onload = function () {
    var startButton = document.getElementById('start-btn')
    var timer = document.getElementById('timer')
    var questionElement = document.getElementById('question')
    var answerButtonsElement = document.getElementsByClassName('btn')
    var timerCount = 65
    var numCorrect = 0
    var currentQuestion = 0
    var resultsElement = document.getElementById('results')


    // Event listener that starts the timer and the game on the click of startgame. 
    startButton.addEventListener('click', startQuiz)
    startButton.addEventListener('click', startTime)




    // Start game function which starts the game when you click it. 
    function startQuiz() {
        console.log('Game on')
        startButton.style.display = 'none'
        examInSession()
    }


    // After starting game, have to go to the first question.
    function examInSession() {
        showQuestion(quizQuestions[currentQuestion])
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
            answerButtonsElement[i].addEventListener("click", chooseAnswer)
            answerButtonsElement[i].buttonNum = i
            answerButtonsElement[i].questionData = currentQuestion
        }
    }


    // Could not get this to work. Thank you stack overflow. Had to target specific buttons as I couldn't get each answer to match the specific button. There is probably a much easier way to do this, but I couldn't get this to work for the life of me so any suggestion here would be quite helpful. 


    function chooseAnswer(eventData) {

        if (eventData.currentTarget.questionData.correctAnswer == eventData.currentTarget.buttonNum) {

            numCorrect++;

            console.log('correct answer')
            resultsElement.innerText = "You right!"

        }
        else {
            timerCount -= 10
            console.log('no')
            resultsElement.innerText = "Nah son!"
        }
        currentQuestion++
        showQuestion(quizQuestions[currentQuestion])
    }


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