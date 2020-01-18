import Player from './Player.js';
import Game from './Game.js';

let testPl = new Player('rand', 'm5.png', 1);
let testPl2 = new Player('comp', 'default', 2);
console.log(testPl.name, testPl.avi);

let curGame = new Game(testPl, testPl2);
console.log(curGame);

let positionPlayer1 = 1;
let positionPlayer2 = 1;
const totalSpaces = document.getElementsByClassName('space').length/2;

document.addEventListener('keydown', whichKey);

const startModal = document.getElementById('start');

startModal.addEventListener('click', function() {this.style.display = 'none';});


function whichKey(e) {
  if (e.keyCode === 190) {
    movePlayerOne();
  } else if (e.keyCode === 90) {
    movePlayerTwo();
  }
}

function movePlayerOne() {
  positionPlayer1++;
  moveOneSpace(1, positionPlayer1, testPl.ele);
}
function movePlayerTwo() {
  positionPlayer2++;
  moveOneSpace(2, positionPlayer2, testPl2.ele);
}
function moveOneSpace(playerNum, position, player ) {
  document.getElementById(playerNum+'-space'+position).append(player);
  if (position === totalSpaces) {
    document.removeEventListener('keydown', whichKey);
    winner(playerNum);
  }
}

function winner(num) {
  console.log(`And the winner is Player ${num}`);
}
