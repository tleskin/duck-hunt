function Player () {
  this.shoot_count = 0;
}

Player.prototype.shoot = function (x, y) {
    this.shoot_count++;
    this.x = x;
    this.y = y;
    return this;
}

module.exports = Player;
