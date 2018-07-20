'use strict';

var startBtn = document.querySelector('#btn-start-game'),
    rockBtn = document.querySelector('#player-rock'),
    paperBtn = document.querySelector('#player-paper'),
    scissorsBtn = document.querySelector('#player-scissors'),
    panelGame = document.querySelector('.panel-game'),
    buttons = document.querySelector('#buttons'),
    playerName = document.querySelector('#player-name'),
    round = document.querySelector('#round'),
    result = document.querySelector('#result'),
    output = document.querySelector('#output'),
    gameRounds,
    name,
    playerPoints = 0,
    computerPoints = 0;

// Game
panelGame.style.display = "none";
output.style.display = "none";
buttons.style.display = "none";

// Start game
var startGame = function() {
    name = window.prompt('What is your name?');
    if(!isNaN(name)) {
        output.style.display = "block";
        output.innerHTML = "Don't be shy :-)";
        console.log(output.innerHTML);
    } else {
        window.alert('Good luck ' + name + " ! Let's start");
        gameRounds = window.prompt('How many games would you like to play?');
        if(gameRounds == '' || gameRounds <= 0 || isNaN(gameRounds)) {
            panelGame.style.display = "none";
            buttons.style.display = "none";
            output.style.display = "block";
            output.innerHTML = "Wrong value, please write again.";
        } else {
            round.innerHTML = gameRounds;
            panelGame.style.display = "block";
            buttons.style.display = "flex";
            output.style.display = "block";
            playerPoints = 0;
            computerPoints = 0;
            playerName.innerHTML = name + ' : Computer';
            result.innerHTML = "0 : 0";
            output.innerHTML = '';
        }
    }
}

startBtn.addEventListener('click', function() {startGame();})

// Player move ---
rockBtn.addEventListener('click', function() {resultGame('rock')});
paperBtn.addEventListener('click', function() {resultGame('paper')});
scissorsBtn.addEventListener('click', function() {resultGame('scissors')});

// Computer move ---
var computerMove = function() {
    var value = Math.ceil(Math.random() * 3);
    if(value == 1) {
        return 'rock';
    } else if(value == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Who win one tour
var whoIsTheWinner = function(player, computer) {
    if(player == 'rock' && computer == 'scissors' || player == 'paper' && computer == 'rock' || player == 'scissors' && computer == 'paper') {
        return name;
    } else if(player == 'rock' && computer == 'paper' || player == 'paper' && computer == 'scissors' || player == 'scissors' && computer == 'rock') {
        return 'Computer';
    } else {
        return 'Noboy';
    }
}

// Points
var points = function(winner) {
    if(winner == name) {
       return playerPoints++;
       } else if(winner == 'Computer') {
        return computerPoints++
    }   
}


var resultGame = function(player) {
    
    // Computer move
    var computer = computerMove();
   
    // Who is the winner
    var winner = whoIsTheWinner(player, computer);
    
    // Points
    var pointsForGame = points(winner);
    
    // Result
    var resultContent = function() {
        result.innerHTML = playerPoints + ' : ' + computerPoints;
        output.innerHTML = 'THE END<br><br><strong>' + winnerGame + ' is the winner!</strong>';
    }
        var winnerGame;
        if(gameRounds == playerPoints) {
            winnerGame = name;
            resultContent();
            buttons.style.display = 'none';
        } else if(gameRounds == computerPoints) {
            winnerGame = "Computer";
            resultContent();
            buttons.style.display = 'none';
        } else {
            result.innerHTML = playerPoints + ' : ' + computerPoints;
            output.innerHTML = name + ': <strong>' + player + '</strong> Computer: <strong>' + computer + '</strong> . ' + winner + ' won.<br>' + output.innerHTML;
        }
}