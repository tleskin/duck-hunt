const Game = require('./game')
const Duck = require('./duck')
const Player = require('./player')

var canvas = document.getElementById('game');

const duck = new Duck(50, 50, canvas);
const game = new Game();

var context = canvas.getContext('2d');

const render = function () {
	// Score
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillText("Ducks hit: " + game.points, 32, 32);
};

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  render();
  duck.draw(context).move();
  requestAnimationFrame(gameLoop);
});
