var scores, roundScore, ActivePlayer, dice, gamePlaying;

init();

dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current--' + ActivePlayer).textContent = dice;



document.querySelector('.btn--roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Generate Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number NOT 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        document.querySelector('#current--' + ActivePlayer).textContent = roundScore;
        //roundScore = roundScore + dice;
    } else {
    nextPlayer();
    }
    }
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    if (gamePlaying) {
        // Add Current score to GLOBAL score
    scores[ActivePlayer] += roundScore;
    // scores[ActivePlayer] = scores[ActivePlayer] + roundScore;

    // Update the ui
    document.querySelector('#score--' + ActivePlayer).textContent = scores[ActivePlayer];


    // Undefinied, 0, null or "" are oerced to false
    // anything else is coerced to true

   
    var input = document.querySelector('.final-score').value;

    if(input){
        var winningScore = input;
    } else {
        winningScore = 100;
    }

    // Check if the player win the game
    if(scores[ActivePlayer] >= winningScore){
        document.querySelector('#name--' + ActivePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + ActivePlayer).classList.add('player--winner');
        document.querySelector('.player--' + ActivePlayer).classList.remove('player--active');
        gamePlaying = false;
    } else {
        // Next player
        nextPlayer();
    }
    }

});

function nextPlayer(){
    ActivePlayer === 0 ? ActivePlayer = 1 : ActivePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

document.querySelector('.btn--new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    ActivePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}