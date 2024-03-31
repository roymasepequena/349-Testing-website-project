const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')
const scoreDisplay = document.getElementById('score')
const progressBarFull = document.querySelector('#progressBarFull')


const questions = [
// 1
{
    question: 'Which CSS property is used to make text italic?',
    answers:[
        {text: 'text-style', correct: false},
        {text: 'font-style', correct: true},
        {text: 'style', correct: false},
        {text: 'font', correct: false}
    ]
},
//2
{
    question: "This class starts at 10 AM on Fridays.",
    answers: [
        {text: 'True', correct: true},
        {text: 'False', correct: false}
    ]
},
//3
{
    question: "Which coding languages are we learning in this course?",
    answers: [
        {text: 'JavaScript', correct: true},
        {text: 'HTML', correct: true},
        {text: 'CSS', correct: true},
        {text: 'C++', correct: false},
        {text: 'Python', correct: false},
        {text: 'Swift', correct: false}
    ]
},
//4
{
    question: 'HTML documents must always start with a <!DOCTYPE html> declaration.',
    answers: [
        {text: 'True', correct: true},
        {text: 'False', correct: false}
    ]
},
//5
{
    question: 'What building do we meet in?',
    answers: [
        {text: 'Education', correct: true},
        {text: 'McCarthy Hall', correct: false},
        {text: 'Education/Computer Science', correct: false},
        {text: 'Humanities', correct: false},
    ]
},
//6
{
    question: "HTML stands for 'Hyper Text Markup Language.'",
    answers: [
        {text: 'True', correct: true},
        {text: 'False', correct: false}
    ]
},
//7
{
    question: "What does CSS stand for?",
    answers: [
        {text: "Creative Style Sheets", correct: false},
        {text: "Cascading Style Sheets", correct: true},
        {text: "Computer Style Sheets", correct: false},
        {text: "Content Style Sheets", correct: false}
    ]
},
//8
{
    question: "Which of the following is NOT a semantic HTML element?",
    answers: [
        {text: "<header>", correct: false},
        {text: "<div>", correct: true},
        {text: "<footer>", correct: false},
        {text: "<nav>", correct: false}
    ]
},
//9
{
    question: "JavaScript is a server-side scripting language.",
    answers: [
        {text: "True", correct: false},
        {text: "False", correct: true}
    ]
},
//10
{
    question: "Which of the following is a key feature of Bootstrap?",
    answers: [
        {text: "Server-side rendering", correct: false},
        {text: "Static website generation", correct: false},
        {text: "Responsive design", correct:true},
        {text: "Object-oriented programming", correct:false}
    ]
},
//11
{
    question: "Which CSS property is used to change the text color of an element?",
    answers: [
        {text: "text-color", correct:false},
        {text: "color", correct:true},
        {text: "font-color", correct:false},
        {text: "text-style", correct:false}
    ]
},
//12
{
    question: "Which of the following is NOT a valid CSS unit of measurement for lengths?",
    answers: [
        {text: "em", correct:false},
        {text: "px", correct:false},
        {text: "ex", correct:false},
        {text: "lb", correct:true}
    ]
},
//13
{
    question: "HTML5 introduced a <canvas> element for drawing graphics using JavaScript.",
    answers: [
        {text: "True", correct:true},
        {text: "False", correct:false}
    ]
},
//14
{
    question: "What is the correct way to comment in HTML?",
    answers: [
        {text: "<!-- This is a comment -->", correct:true},
        {text: "// This is a comment", correct:false},
        {text: "/* This is a comment */", correct:false},
        {text: "' This is a comment '", correct:false}
    ]
},
//15
{
    question: "Which JavaScript method is used to add a new item to the end of an array?",
    answers: [
        {text: "insert", correct:false},
        {text: "add()", correct:false},
        {text: "append()", correct:false},
        {text: "push()", correct:true}
    ]
},
//16
{
    question: "Which CSS property is used to set the display behavior of an element ?",
    answers: [
        {text: "display-mode", correct:false},
        {text:"dipslay-type", correct:false},
        {text: "display", correct:true},
        {text:"display-style", correct:false}
    ]
},
//17
{
    question: "JavaScript is a case-sensitive programming language.",
    answers: [
        {text: "True", correct:true},
        {text: "False", correct:false}
    ]
},
//18
{
    question: "Which HTML tag is used for creating an unordered list?",
    answers: [
        {text: "<ul>", correct:true},
        {text: "<list>", correct:false},
        {text: "<ol>", correct:false},
        {text: "<li>", correct:false}
    ]
},
//19
{
    question: "Which attribute is used to provide an alternative text for an image?",
    answers: [
        {text: "src", correct:false},
        {text:"title", correct:false},
        {text: "desc", correct:false},
        {text:"alt", correct:true}
    ]
},
//20
{
    question: "Which element is used to define the title of an HTML document?",
    answers: [
        {text: "<header>", correct:false},
        {text:"<h1>", correct:false},
        {text: "<title>", correct:true},
        {text:"<head>", correct:false}
    ]
}]

let score = 0
let shuffleQuestions, currentQuestion
let randomizedQuestions = randomQuestion(questions, 10)


startButton.addEventListener('click', startQuizze);
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()

})

function randomQuestion(array, numItems) {
    let questionsArray = []
    let length = array.length

    while (questionsArray.length < numItems) {
        let randomIndex = Math.floor(Math.random() * length)
        let selectedQuestion = array[randomIndex]

        if (!questionsArray.includes(selectedQuestion)){
            questionsArray.push(selectedQuestion)
        }
    }

    return questionsArray
}

function startQuizze() {
    startButton.classList.add('hidden')
    score = 0
    updateScore()
    shuffleQuestions = randomizedQuestions.sort(() => Math.random())
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
    updateprogressBarFull()
    if (start)
    {
        updateprogressBarFull()
    }
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
    nextButton.classList.remove('hidden')
}

function updateScore() {
    scoreDisplay.innerText = score + '/' + randomizedQuestions.length
}

function updateprogressBarFull() {
    const progress = Math.round((currentQuestion / randomizedQuestions.length) * 100)
    progressBarFull.style.width = `${progress}%`
    scoreDisplay.innerText = score + '/' + randomizedQuestions.length
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