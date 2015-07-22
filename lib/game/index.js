// const Duck = require('../duck')
// const Player = require('../player')

function Game () {
  // const duck = new Duck;
  // const player = new Player;
  this.successfulHits = 0;
  this.shot_count = 0;
}

Game.prototype.scoreKeeper = function (shot, duck) {

  if( shot.x <= (duck.x + 10)
  		&& duck.x <= (shot.x + 10)
  		&& shot.y <= (duck.y + 10)
  		&& duck.y <= (shot.y + 10)) {

    if(this.shot_count < 3) {
      this.successfulHits++;
    } else {
      this.shot_count++;
    }
  }
  this.shot_count++;
  return this;
}

module.exports = Game;
