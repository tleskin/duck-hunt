const Game = require('./game')
const Duck = require('./duck')
const Player = require('./player')

const duck = new Duck;

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

duck.draw = function() {
  context.fillStyle = "blue";
  context.fillRect(duck.x, duck.y, duck.width, duck.height);
  return this;
}

duck.move = function () {
  if (duck.y + duck.height < canvas.height){
    duck.y++;
  } else if (duck.y + duck.height == canvas.height) {
    // duck.x -= 2;
    duck.y--;
  }

  return this;
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  duck.draw();
  duck.move();
  requestAnimationFrame(gameLoop);
});
