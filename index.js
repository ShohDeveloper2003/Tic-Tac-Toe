"use strict";
// window.location.reload();
// X => <i class="fas fa-times"></i>
// y => <i class="fas fa-circle-notch"></i>

// Selecting All "Starting Page" Tags
let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose");

// Selecting All "Main Page" Tags
let mainPage = document.querySelector("#mainPage"); 
let showChange = document.querySelector("#showChange"); 
let boxes  = document.querySelectorAll('.boxes');

// Selecting All "Winner Page" Tags

let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");


// How Can we Change Turns
// False => X's Turn
// True => O's Turn
let changeTurn = null;

choose.forEach(chooseNow =>{
  chooseNow.addEventListener('click', () => {
    if(chooseNow.id == 'playerX'){
      showChange.style.left = '0px';
    }else{
      showChange.style.left = '160px';
    }
    startingPage.style.display = 'none';
    mainPage.style.display = 'block';
  });
});

boxes.forEach(items => {
  items.addEventListener('click', () => {
    if(changeTurn == false) {
      items.innerHTML = `<i class="fas fa-times"></i>`;
      items.id = 'X';
      items.style.pointerEvents = 'none';
      showChange.style.left = '160px';

      changeTurn = true;
    }else{
      items.innerHTML = `<i class="fas fa-circle-notch"></i>`;
      items.id = 'O';
      items.style.pointerEvents = 'none';
      showChange.style.left = '0px';

      changeTurn = false;
    }
    winningFunc();
    drawFunc();
  });
});

// Winning Page

let winningCombination = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

let winningFunc = () => {
  for(let a=0; a<=7;a++){
    let b = winningCombination[a];
    if(boxes[b[0]].id == '' || boxes[b[1]].id == '' || boxes[b[2]].id == ''){
      continue;
    }else if(boxes[b[0]].id == 'X' && boxes[b[1]].id == 'X' && boxes[b[2]].id == 'X'){
      // Add Winner Text
      winnerName.innerHTML = `Player X The Game!`;

      // Show 'WinnerPage' & Hide "MainPage"
      mainPage.style.display = ' none';
      winner.style.display = 'block';
    }
    else if(boxes[b[0]].id == 'O' && boxes[b[1]].id == 'O' && boxes[b[2]].id == 'O'){
      // Add Winner Text
      winnerName.innerHTML = `Player O The Game!`;

      // Show 'WinnerPage' & Hide "MainPage"
      mainPage.style.display = ' none';
      winner.style.display = 'block';
    }
  }
};

let drawFunc = () => {
  let allBoxesFilled = true;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].id === '') {
      allBoxesFilled = false;
      break;
    }
  }
  if (allBoxesFilled) {
    winnerName.innerHTML = `Draw Match!`;
    mainPage.style.display = 'none';
    winner.style.display = 'block';
  }
};

quit.addEventListener('click', () => {
  window.location.reload()
});