'use strict';
/*************
 * PIG GAME
 */
 /*****
  * GAME RULES CAN BE FOUND ONLINE
  */
var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying){
        // random number selection
    var dice = Math.floor(Math.random() * 6) + 1; // random selection of numbers between 1 & 6

    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //document.getElementById('current--' + activePlayer).textContent = dice; //textContent as a setter

    if( dice !== 1){
        roundScore += dice;
        document.getElementById('current--' + activePlayer).textContent = roundScore;
    }else{
        //Do something
        nextPlayer();

        // document.querySelector('.player--0').classList.remove('player--active');
        // document.querySelector('.player--1').classList.add('player--active');
    }
    }
    

});
  
document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;

        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 100){
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

        document.querySelector('.dice').style.display = 'none';
}

function winner(){
        roundScore = 0;

        // document.getElementById('current--0').textContent = '0';
        // document.getElementById('current--1').textContent = '0';
        document.querySelector('.player--' + activePlayer).classList.add('winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');

        
        //document.querySelector('.player--' + activePlayer).classList.add('player--active');

        document.querySelector('.dice').style.display = 'none';
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'; //selects the class dice and styles the display property to none

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