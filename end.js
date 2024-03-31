const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore
// This disables the save button if there is no username
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

// This saves the scores of the player
saveHighScore = (e) => {
    e.preventDefault()
    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)
    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(5)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('quizzes.html')
}