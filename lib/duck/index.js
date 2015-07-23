function Duck (x, y, canvas) {
  this.alive = true;
  this.x = x || 62;
  this.width = 50;
  this.height = 56;
  this.y = y || 100;
  this.dx = 2;
  this.dy = 3;
  this.canvas = canvas;
}

Duck.prototype.move = function () {
  if(this.alive){
    if (this.x + this.dx > this.canvas.width || this.x + this.dx < 0)
      this.dx = -this.dx;

    if (this.y + this.dy > this.canvas.height - 75 || this.y + this.dy < 0)
      this.dy = -this.dy;
      this.x += this.dx;
      this.y += this.dy;
    return this;
  } else if (this.y + 20 < this.canvas.height) {
    this.y++;
    this.y++;
  }
}

Duck.prototype.draw = function(context) {
  context.fillStyle = "transparent";
  context.fillRect(this.x, this.y, this.width, this.height);

  return this;
}

Duck.prototype.shot = function () {
  this.alive = !this.alive;
  return this;
}

var flyRandomly = function () {
    if (this.x + this.dx > this.canvas.width || this.x + this.dx < 0)
      this.dx = -this.dx;

    if (this.y + this.dy > this.canvas.height - 75 || this.y + this.dy < 0)
      this.dy = -this.dy;
      this.x += this.dx;
      this.y += this.dy;
}

module.exports = Duck;
