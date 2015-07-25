function Game () {
  this.successfulHits = 0;
  this.shot_count = 3;
}

Game.prototype.scoreKeeper = function (shot, duck) {
  if( shot.x <= (duck.x + 62) && duck.x <= (shot.x + 62) && shot.y <= (duck.y + 56) && duck.y <= (shot.y + 56)) {
    if(this.shot_count > 0) {
      this.successfulHits++;
      duck.alive = !duck.alive;
    }
  }
  this.shot_count--;
  return this;
};

Game.prototype.resetGame = function(duck) {
  this.successfulHits = 0;
  this.shot_count = 3;
  duck.x = Math.random();
  duck.width = 50;
  duck.height = 56;
  duck.y = 455;
  duck.alive = true;
  duck.slopeX = 4;
  duck.slopeY = 6;
};

module.exports = Game;
