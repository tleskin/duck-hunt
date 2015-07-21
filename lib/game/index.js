const Duck = require('../duck')
const Player = require('../player')

function Game () {
  const duck = new Duck;
  const player = new Player;
  this.points = 0;
  this.shot_count = 0;
}

Game.prototype.scoreKeeper = function (shot, duck) {
  if(duck.x === shot.x && duck.y === shot.y) {
    if(this.shot_count < 3) {
      this.points++;
    } else {
      this.shot_count++;
    }
  }
  this.shot_count++;
  return this;
}

module.exports = Game;
