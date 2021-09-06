const startButton = document.getElementById("start-btn")
    startButton.addEventListener("click", startQuiz) //Listen for click and execute startQuiz function
const nextButton = document.getElementById('next-btn')
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++
        setNextQuestion()
    }
    )
const questionContainerEl = document.getElementById("question-container")
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('answer-buttons')

// Construct timer variables
const timerEl = document.getElementById("timer")

 

// End of timer

let shuffledQuestions, currentQuestionIndex


function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide") //Hide start button when quiz begins
    shuffledQuestions = questions.sort(() => Math.random() - .5) //Shuffle questions
    currentQuestionIndex = 0 //Set current index to 0
    questionContainerEl.classList.remove("hide")
    setNextQuestion()
}



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
        button.addEventListener('click', selectAnswer)
        answerButtonEl.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
        while (answerButtonEl.firstChild) {
            answerButtonEl.removeChild(answerButtonEl.firstChild)
        }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonEl.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
                nextButton.classList.remove('hide')
        } else {
            startButton.innerText = 'Restart'
            startButton.classList.remove('hide')
        } 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
} 


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: 'alerts', correct: true},
            {text: 'strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'numbers', correct: false},
        ]
    },
    {
        question: 'The condition in an IF/ELSE statement is enclosed with:',
        answers: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: true},
            {text: 'parenthesis', correct: false},
            {text: 'sqare brackets', correct: false},
        ]
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables:',
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parenthesis', correct: false},
        ]
    },
    {
        question: 'Arrays in Javascript can be used to store:',
        answers: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'all of the above', correct: true},
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'Javascript', correct: false},
            {text: 'terminal bash', correct: false},
            {text: 'for loops', correct: false},
            {text: 'console.log', correct: true},
        ]
    }
]