import Player from './Player.js';
import Game from './Game.js';

let testPl = new Player('rand', 'm5.png', 1);
let testPl2 = new Player('comp', 'default', 2);
console.log(testPl.name, testPl.avi);

const totalSpaces = document.getElementsByClassName('space').length/2;

let curGame = new Game(testPl, testPl2, totalSpaces);
console.log(curGame);

const startModal = document.getElementById('start');

startModal.addEventListener('click', function() {
  this.style.display = 'none';
  curGame.whichKeyL = curGame.whichKey.bind(curGame);
  document.addEventListener('keydown', curGame.whichKeyL);
});
