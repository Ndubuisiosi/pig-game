'use strict';
/*************
 * PIG GAME
 */
 /*****
  * GAME RULES CAN BE FOUND ONLINE
  */
var scores, roundScore, activePlayer, gamePlaying;

init();


var lastDice;

document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying){
        // random number selection
    var dice1 = Math.floor(Math.random() * 6) + 1; // random selection of numbers between 1 & 6
    var dice2 = Math.floor(Math.random() * 6) + 1; // random selection of numbers between 1 & 6
    //challenge 1

    //display the result
    document.getElementById('dice--1').style.display = 'block';
    document.getElementById('dice--2').style.display = 'block';
    
    document.getElementById('dice--1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice--2').src = 'dice-' + dice2 + '.png';

    var dice = dice1 + dice2;

    //document.getElementById('current--' + activePlayer).textContent = dice; //textContent as a setter

    // if(lastDice === 6 && dice === 6){
    //     document.getElementById('score--' + activePlayer).textContent = '0'; //DOM Manipulation to set score on webpage to 0
    //     scores[activePlayer] = 0;
    //     nextPlayer();  // player's score resets to zero if he rolls 6 twice in a row
    // }
    if( dice1 !== 1 && dice2 !== 1){
        roundScore += dice;
        document.getElementById('current--' + activePlayer).textContent = roundScore;
    }else{
        //Do something
        nextPlayer();
    }

    lastDice = dice;  //stores the value of the dice roled last into the global variable lastDice
    
    }    

});
  
document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;

        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final--score').value;
        // undefined , null, '', 0 is COERCED to false

        if(input){ //challenge 2
            var winningScore = input;
        }else{
            winningScore = 100;
        }

        //console.log(winningScore);

        if(scores[activePlayer] >= winningScore){
            document.getElementById('name--' + activePlayer).textContent = 'Winner!!!';
            winner();
            gamePlaying = false;
        }
        else{
             nextPlayer();
        }

    
    }  
        
});


document.querySelector('.btn--new').addEventListener('click', function(){

    init();
  
});








function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.getElementById('dice--1').style.display = 'none'; //selects the class dice and styles the display property to none
        document.getElementById('dice--2').style.display = 'none'; 
}

function winner(){
        roundScore = 0;

        // document.getElementById('current--0').textContent = '0';
        // document.getElementById('current--1').textContent = '0';
        document.querySelector('.player--' + activePlayer).classList.add('winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');

        
        //document.querySelector('.player--' + activePlayer).classList.add('player--active');

        document.getElementById('dice--1').style.display = 'none'; //selects the class dice and styles the display property to none
        document.getElementById('dice--2').style.display = 'none'; 
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice--1').style.display = 'none'; //selects the class dice and styles the display property to none
    document.getElementById('dice--2').style.display = 'none'; 

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';

    document.getElementById('name--0').textContent = 'player 1';
    document.getElementById('name--1').textContent = 'player 2';

    
    document.querySelector('.player--1').classList.remove('winner');
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--active');

    document.querySelector('.player--0').classList.add('player--active');

    
}





//document.querySelector('#current--' + activePlayer).textContent = dice; //textContent as a setter
//document.querySelector('#current--0').innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score--0').textContent; //textContent as a getter
//console.log(x);