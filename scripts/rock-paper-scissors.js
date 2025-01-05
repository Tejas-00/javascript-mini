let score = JSON.parse(localStorage.getItem('score'));

const rockButtonElem = document.querySelector('.js-rock-button');
rockButtonElem.addEventListener('click', () => playGame('rock')) 

const paperButtonElem = document.querySelector('.js-paper-button');
paperButtonElem.addEventListener('click', () => playGame('paper')) 

const scissorsButtonElem = document.querySelector('.js-scissors-button');
scissorsButtonElem.addEventListener('click', () => playGame('scissors')) 

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
        playGame('rock');
    } else if (event.key === 'p' || event.key === 'P') {
        playGame('paper');
    } else if (event.key === 's' || event.key === 'S') {
        playGame('scissors');
    }
})

document.querySelector('.js-reset-button')
    .addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        updateScore();
    })

if (score === null) {
    score = {
        wins:0,
        losses:0,
        ties:0
    };
}

function pickCompMove() {
    randomNumber = Math.random();
    if (0 <= randomNumber && randomNumber < 1/3) {
        compMove = 'rock';
    } else if (1/3 <= randomNumber && randomNumber < 2/3) {
        compMove = 'paper';
    } else {
        compMove = 'scissors';
    }
    return compMove;
}
function playGame(playerMove) {
    compMove = pickCompMove();
    if (playerMove === 'rock') {
        if (compMove === 'rock') {
            result = 'Tie';
        } else if (compMove === 'paper') {
            result = 'You loss';
        } else {
            result = 'You win';
        }
    } else if (playerMove === 'paper') {
        if (compMove === 'rock') {
            result = 'You win';
        } else if (compMove === 'paper') {
            result = 'Tie';
        } else {
            result = 'You loss';
        }
    } else {
        if (compMove === 'rock') {
            result = 'You loss';
        } else if (compMove === 'paper') {
            result = 'You win';
        } else {
            result = 'Tie';
        }
    }

    const resultElem = document.querySelector('.js-result');
    resultElem.innerHTML = result;

    const movePlayedElem = document.querySelector('.js-movePlayed');
    movePlayedElem.innerHTML = 
        `You
        <img src="images/${playerMove}-emoji.png" alt="${playerMove}" class="moves-icon">
        <img src="images/${compMove}-emoji.png" alt="${compMove}" class="moves-icon">
        Computer`;

    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You loss') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }
    updateScore();
}
function updateScore() {
    const scoreElem = document.querySelector('.js-score');
    scoreElem.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    localStorage.setItem('score', JSON.stringify(score));
}
updateScore();