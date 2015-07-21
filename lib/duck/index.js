function Duck () {
  this.alive = true;
  this.x = 50;
  this.width = 20;
  this.height = 20;
  this.y = 100;
  this.velocity = 256;
}

Duck.prototype.shot = function () {
  this.alive = !this.alive;
  return this;
}

Duck.prototype.fly = function () {
  this.x = this.x + this.velocity;
  this.y = this.y + this.velocity;
}

module.exports = Duck;
