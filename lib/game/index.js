const Duck = require('../duck')
const Player = require('../player')

function Game () {
  const duck = new Duck;
  const player = new Player;
  this.hit = false;
}

Game.prototype.hitIsAccurate = function (shot, duck) {
  if(duck.x === shot.x && duck.y === shot.y) {
    this.hit = !this.hit;
  }
  return this;
}

module.exports = Game;
