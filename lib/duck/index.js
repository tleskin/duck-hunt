function Duck (x, y, canvas) {
  this.alive = true;
  this.x = Math.random();
  this.width = 50;
  this.height = 56;
  this.y = 455;
  this.slopeX = 2;
  this.slopeY = 4;
  this.canvas = canvas;
}

Duck.prototype.move = function () {
  if(this.alive){
    flyRandomly.call(this);
    if (this.x + this.slopeX > this.canvas.width || this.x + this.slopeX < 0)
      this.slopeX = -this.slopeX;

    if (this.y + this.slopeY > this.canvas.height - 150 || this.y + this.slopeY < 100)
      this.slopeY = -this.slopeY;
      this.x += this.slopeX;
      this.y += this.slopeY;
    return this;
  } else if (this.y + 20 < this.canvas.height) {
    this.y += 10;

  }
};

Duck.prototype.draw = function(context) {
  context.fillStyle = "transparent";
  context.fillRect(this.x, this.y, this.width, this.height);

  return this;
};

Duck.prototype.shot = function () {
  this.alive = !this.alive;
  return this;
};

var flyRandomly = function () {
    if (this.x + this.slopeX > this.canvas.width || this.x + this.slopeX < 0)
      this.slopeX = -this.slopeX;

    if (this.y + this.slopeY > this.canvas.height - 75 || this.y + this.slopeY < 0)
      this.slopeY = -this.slopeY;
      this.x += this.slopeX;
      this.y += this.slopeY;
};

module.exports = Duck;
