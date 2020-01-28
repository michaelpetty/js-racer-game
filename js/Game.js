class Game {
  constructor (player1, player2, spaces) {
    this.player1 = player1;
    this.player2 = player2;
    this.spaces = spaces;
  }

  winner(num) {
    console.log(`And the winner is Player ${num}`);
  }

  moveOneSpace(playerNum, position, player ) {
    document.getElementById(playerNum+'-space'+position).append(player);
    if (position === this.spaces) {
      document.removeEventListener('keydown', this.whichKeyL);
      this.winner(playerNum);
    }
  }

  movePlayerOne() {
    this.player1.pos++;
    this.moveOneSpace(1, this.player1.pos, this.player1.ele);
  }

  movePlayerTwo() {
    this.player2.pos++;
    this.moveOneSpace(2, this.player2.pos, this.player2.ele);
  }

  whichKey(e) {
    if (e.keyCode === 190) {
      this.movePlayerOne();
    } else if (e.keyCode === 90) {
      this.movePlayerTwo();
    }
  }

}

export default Game;
