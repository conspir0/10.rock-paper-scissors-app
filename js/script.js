'use strict';

var rockBtn = document.querySelector('#player-rock'),
    paperBtn = document.querySelector('#player-paper'),
    scissorsBtn = document.querySelector('#player-scissors'),
    output = document.querySelector('#output'),
    playerPoints = 0,
    computerPoints = 0;


// Player move ---
rockBtn.addEventListener('click', function() {result('rock')});
paperBtn.addEventListener('click', function() {result('paper')});
scissorsBtn.addEventListener('click', function() {result('scissors')});

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

// Who is the winner
var whoIsTheWinner = function(player, computer) {
    if(player == 'rock' && computer == 'scissors' || player == 'paper' && computer == 'rock' || player == 'scissors' && computer == 'paper') {
        return 'you';
    } else if(player == 'rock' && computer == 'paper' || player == 'paper' && computer == 'scissors' || player == 'scissors' && computer == 'rock') {
        return 'computer';
    } else {
        return 'noboy';
    }
}

// Points
var points = function(winner) {
    if(winner == 'you') {
       return playerPoints++;
       } else if(winner == 'computer') {
        return computerPoints++
    }   
}

var result = function(player) {
    
    // Computer move
    var computer = computerMove();
   
    // Who is the winner
    var winner = whoIsTheWinner(player, computer);
    
    // Points
    var pointsForGame = points(winner);
    
    // Output
    output.innerHTML = 'Player: ' + player + ' Computer: ' + computer + '<br>The winner is ' + winner;
}