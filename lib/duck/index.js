function Duck () {
  this.alive = true;
}

Duck.prototype.shoot = function () {
  this.alive = !this.alive;
  return this;
}

module.exports = Duck;
