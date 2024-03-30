const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const resetScoresBtn = document.getElementById('resetScoresBtn');

highScoresList.innerHTML = 
highScores.map(score => {
  return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')

resetScoresBtn.addEventListener('click', function() {
    localStorage.removeItem('highScores');
    window.location.reload();
})
