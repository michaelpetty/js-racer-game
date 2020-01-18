class Player {
  constructor(name, avi, elId, pos) {
    this.name = name;
    this.avi = avi;
    this.ele = document.getElementById(elId);
    this.pos = pos || 1;
  }
}

export default Player;
