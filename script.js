const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')
const scoreDisplay = document.getElementById('score')
const progressBarFull = document.querySelector('#progressBarFull')


const questions = [
    {
        question: 'What is our class code?',
        answers:[
            {text: '349', correct: true},
            {text: '362', correct: false},
            {text: '411', correct: false},
            {text: '449', correct: false}
        ]
    },
    {
        question: "The class starts at 10 AM?",
        answers: [
            {text: 'True', correct: true},
            {text: 'False', correct: false}
        ]
    },
    {
        question: "Which coding languages are we learning?",
        answers: [
            {text: 'JavaScript', correct: true},
            {text: 'HTML', correct: true},
            {text: 'CSS', correct: true},
            {text: 'C++', correct: false},
            {text: 'Python', correct: false},
            {text: 'Swift', correct: false}
        ]
    },
    {
        question: 'We only meet once a week?',
        answers: [
            {text: 'True', correct: true},
            {text: 'False', correct: false}
        ]
    },
    {
        question: 'What building do we meet in?',
        answers: [
            {text: 'Education', correct: true},
            {text: 'McCarthy Hall', correct: false},
            {text: 'Education/Computer Science', correct: false},
            {text: 'Humanities', correct: false},
        ]
    }
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 5
let score = 0
let shuffleQuestions, currentQuestion
let availableQuestions = []


startButton.addEventListener('click', startQuizze);
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()

})

function startQuizze() {
    startButton.classList.add('hidden')
    score = 0
    updateScore()
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionBoxElement.classList.remove('hidden')
    nextQuestion()
}

function nextQuestion() {
    if(currentQuestion >= shuffleQuestions.length){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }
    resetState()
    showQuestion(shuffleQuestions[currentQuestion])
    currentQuestion++
    updateprogressBarFull()
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerButtonsElement.appendChild(button)
    })  
}

function resetState() {
    nextButton.classList.add('hidden')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function chooseAnswer(e){
    const clickedButton = e.target
    const correct = clickedButton.dataset.correct
    if(correct){
        score++
        updateScore()
    }
    setStatus(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    nextQuestion()
}

function updateScore() {
    scoreDisplay.innerText = score + '/' + questions.length
}

function updateprogressBarFull() {
    const progress = Math.round((currentQuestion / questions.length) * 100)
    progressBarFull.style.width = `${progress}%`
    scoreDisplay.innerText = score + '/' + questions.length
}


function setStatus(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}