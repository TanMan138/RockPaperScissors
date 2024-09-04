const score = JSON.parse(localStorage.getItem('score'))|| {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScoreKeeper()
let compMove='';
function updateScoreKeeper(){
    document.querySelector('.scoreKeeper').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}` 
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function giveCompMove(){
    const randomNumber = getRandomNumber(1,3);
    if (randomNumber===1) {
        compMove='rock';
    } else if (randomNumber===2){
        compMove='paper';
    } else {
        compMove = 'scissors';
    }
    return compMove;
}
function playGame(compMove,playerMove){
    result="";
if (compMove===playerMove) {
    score.ties++;
    result= 'Tie';
} else if (playerMove === 'rock'){
    if (compMove==='scissors') {
        score.wins++;
        result= 'You win';
    } else {
        score.losses++;
        result= 'You lose';
    }
} else if (playerMove === 'paper'){
    if (compMove==='scissors') {
        score.losses++;
        result= 'You lose';
    } else {
        score.wins++;
        result= 'You win';
    } 
} else {
    if (compMove==='rock') {
        score.losses++;
        result= 'You lose';
    } else {
        score.wins++;
        result= 'You win';
    }
}
localStorage.setItem('score',JSON.stringify(score));
updateScoreKeeper()
alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`);
}
