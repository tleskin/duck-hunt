function Duck (x, y, canvas) {
  this.alive = true;
  this.x = [25, 50, 75].sample();
  this.width = 50;
  this.height = 56;
  this.y = 455;
  this.slopeX = 4;
  this.slopeY = 6;
  this.canvas = canvas;
}

Array.prototype.sample = function() {
  return this[~~(Math.random() * this.length)];
}

Duck.prototype.move = function () {
  if(this.alive){
    flyRandomly.call(this);
  } else if (this.y + 20 < this.canvas.height) {
    fallDown.call(this);
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
    if (this.x + this.slopeX > this.canvas.width || this.x + this.slopeX < 0){
      this.slopeX = -this.slopeX;
    }

    if (this.y + this.slopeY > this.canvas.height - 75 || this.y + this.slopeY < 0)
      this.slopeY = -this.slopeY;
      this.x += this.slopeX;
      this.y += this.slopeY;

};

var fallDown = function () {
  this.y += 10;
};

module.exports = Duck;
