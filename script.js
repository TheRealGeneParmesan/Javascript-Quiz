window.onload = function () {
    var startButton = document.getElementById('start-btn');
    var timer = document.getElementById('timer');
    var questionElement = document.getElementById('question');
    var answerButtonsElement = Array.from(document.getElementsByClassName('btn'));
    var timerCount = 65;
    var numCorrect = 0;
    var currentQuestion = 0;
    var resultsElement = document.getElementById('results');
    var tallyElement = document.getElementById('tally');
    var intervalID; // Declare intervalID variable

    // Event listener that starts the timer and the game on the click of startgame.
    startButton.addEventListener('click', startQuiz);
    startButton.addEventListener('click', startTime);

    function startQuiz() {
        console.log('Game on');
        startButton.style.display = 'none';
        showAnswerButtons();
        examInSession();
    }

    function showAnswerButtons() {
        for (var i = 0; i < answerButtonsElement.length; i++) {
            answerButtonsElement[i].style.display = 'block';
        }
    }

    function examInSession() {
        showQuestion(quizQuestions[currentQuestion]);
    }

    function startTime() {
        intervalID = setInterval(() => {
            if (timerCount <= 0) {
                clearInterval(intervalID);
                endQuiz();
            }
            timer.innerHTML = 'Time: ' + timerCount + ' seconds';
            timerCount--;
        }, 1000);
        console.log('Timer on');

        // Show the timer and results
        timer.classList.add('show');
        resultsElement.classList.add('show');
        tallyElement.classList.add('show');
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        for (var i = 0; i < 4; i++) {
            answerButtonsElement[i].innerText = question.answer[i];

            // Remove previous event listener
            answerButtonsElement[i].removeEventListener('click', chooseAnswer);

            // Add new event listener with proper assignment
            answerButtonsElement[i].addEventListener('click', chooseAnswer);
            answerButtonsElement[i].buttonNum = i;
            answerButtonsElement[i].questionData = question;
        }
    }

    function chooseAnswer(eventData) {
        if (
            eventData.currentTarget.questionData.correctAnswer ===
            eventData.currentTarget.buttonNum
        ) {
            numCorrect++;
            console.log('correct answer');
            resultsElement.innerText = 'You Got it Right!';
            tallyElement.innerHTML = 'You Got ' + numCorrect + ' Right!';
        } else {
            timerCount -= 10;
            console.log('no');
            resultsElement.innerText = 'Nah son!';
        }

        // Remove event listeners from answer buttons
        for (var i = 0; i < answerButtonsElement.length; i++) {
            answerButtonsElement[i].removeEventListener('click', chooseAnswer);
        }

        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++; // Increment currentQuestion here
            showQuestion(quizQuestions[currentQuestion]);
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        console.log('Quiz finished');
        // Disable answer buttons
        for (var i = 0; i < answerButtonsElement.length; i++) {
            answerButtonsElement[i].disabled = true;
        }

        // Display performance message
        var performanceMessage = '';
        if (numCorrect >= 4) {
            performanceMessage = 'You Did great!';
        } else {
            performanceMessage = 'Better Luck Next Time!';
        }
        resultsElement.innerText = performanceMessage;

        // Stop the timer
        clearInterval(intervalID);

        // Clear out the last question and answers
        questionElement.innerText = '';
        for (var i = 0; i < answerButtonsElement.length; i++) {
            answerButtonsElement[i].style.display = 'none';
        }
    }

    var quizQuestions = [
        {
            question: 'Commonly used data types do not include:',
            answer: {
                '0': 'Strings',
                '1': 'Booleans',
                '2': 'Alerts',
                '3': 'Numbers',
            },
            correctAnswer: 2,
        },
        {
            question: 'Arrays in Javascript can be used to store _______',
            answer: {
                '0': 'Numbers and strings',
                '1': 'Other arrays',
                '2': 'Booleans',
                '3': 'All of the above',
            },
            correctAnswer: 3,
        },
        {
            question: 'String values must be enclosed within when being assigned to variables _____ ',
            answer: {
                '0': 'Commas',
                '1': 'Curly brackets',
                '2': 'Quotes',
                '3': 'Parentheses',
            },
            correctAnswer: 2,
        },
        {
            question: 'The condition in an if/else statement is enclosed with _______ when being assigned to variables ',
            answer: {
                '0': 'Quotes',
                '1': 'Curly brackets',
                '2': 'Parentheses',
                '3': 'Square brackets',
            },
            correctAnswer: 2,
        },
        {
            question: 'A very useful tool used during development and debugging for printing content to the debugger is :',
            answer: {
                '0': 'Terminal/bash',
                '1': 'Javascript',
                '2': 'For loops',
                '3': 'Console.log',
            },
            correctAnswer: 3,
        },
    ];
};
