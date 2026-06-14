let score = JSON.parse(localStorage.getItem('score'));
if(!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}

updateScoreElement();

function updateScoreElement(){
  document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove(){
  const randomNunber = Math.random();
  let computerMove = '';
  if(randomNunber >= 0 && randomNunber < 1/3){
    computerMove = 'rock';
  }
  else if(randomNunber >= 1/3 && randomNunber < 2/3){
    computerMove = 'paper';
  }
  else if(randomNunber >= 2/3 && randomNunber < 1){
    computerMove = 'scissors';
  }
  return computerMove;
}


function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';
  if(playerMove === 'scissors'){
    if(computerMove === 'scissors'){
      result = 'tie.';
    }
    else if(computerMove === 'rock'){
      result = 'you lose.';
    }
    else if(computerMove === 'paper'){
      result = 'you win.';
    }
  }
  else if(playerMove === 'paper'){
    if(computerMove === 'paper'){
      result = 'tie.';
    }
    else if(computerMove === 'scissors'){
      result = 'you lose.';
    }
    else if(computerMove === 'rock'){
      result = 'you win.';
    }
  }
  else if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'tie.';
    }
    else if(computerMove === 'paper'){
      result = 'you lose.';
    }
    else if(computerMove === 'scissors'){
      result = 'you win.';
    }
  }
  
  if(result === 'you win.'){
    score.wins += 1;
  } else if(result === 'you lose.'){
    score.losses += 1;
  } else{
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').
  innerHTML = result;
    
  document.querySelector('.js-moves').
  innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`
}
