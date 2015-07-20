function Duck () {
  this.alive = true;
  this.x = 0;
  this.y = 0;
}

Duck.prototype.shoot = function () {
  this.alive = !this.alive;
  return this;
}
//
// Duck.prototype.coordinates = function () {
//   this.x = 0;
//   this.y = 0;
//   return this;
// }

Duck.prototype.fly = function () {
  this.x++;
  this.y++;
}

module.exports = Duck;
