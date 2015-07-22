function Duck (x, y, canvas) {
  this.alive = true;
  this.x = x || 50;
  this.width = 20;
  this.height = 20;
  this.y = y || 100;
  // this.velocity = 256;
  this.dx = 1;
  this.dy = 2;
  this.canvas = canvas;
//
//   var duckReady = false;
//   var duckImage = new Image();
//   duckImage.onload = function () {
//   	duckReady = true;
//   };
//   duckImage.src = "../../duckduck.png";
}

Duck.prototype.move = function () {
  if (this.x + this.dx > this.canvas.width || this.x + this.dx < 0)
    this.dx = -this.dx;

  if (this.y + this.dy > this.canvas.height - 75 || this.y + this.dy < 0)
    this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;

  return this;
}

Duck.prototype.draw = function(context) {
  context.fillStyle = "blue";
  context.fillRect(this.x, this.y, this.width, this.height);

  return this;
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
