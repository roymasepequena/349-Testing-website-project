const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')

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

let shuffleQuestions, currentQuestion, score = 0

startButton.addEventListener('click', startQuizze);
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

function startQuizze() {
    console.log("it works")
    score = 0
    updateScore()
    startButton.classList.add('hidden')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionBoxElement.classList.remove('hidden')
    nextQuestion()
}

function nextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestion])
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
    setStatus(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    if (correct) {
        score++
        updateScore()
    }
    if (shuffleQuestions.length > currentQuestion + 1){
        nextButton.classList.remove('hidden')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hidden')
    }
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

function updateScore() {
    const scoreDisplay = document.querySelector('#scoreDisplay')
    if (scoreDisplay) {
        scoreDisplay.innerText = `Score: ${score} / ${questions.length}`
    }
    // scoreDisplay.innerText = `Score: ${score} / ${questions.length}`
    // questionBoxElement.appendChild(scoreDisplay)
}

function showResult() {
    const scoreDisplay = document.querySelector('#scoreResult')
    if (scoreDisplay) {
        scoreDisplay.innerText = `Score: ${score} / ${questions.length}`
    }
}
