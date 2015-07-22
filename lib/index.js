const Game = require('./game')
const Duck = require('./duck')
const Player = require('./player')

var canvas = document.getElementById('game');
var elemLeft = canvas.offsetLeft;
var elemTop = canvas.offsetTop;

const duck = new Duck(50, 50, canvas);
const game = new Game();

const endGame = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText("Game Over! ", canvas.height / 2, canvas.width / 2);
}

var click = canvas.addEventListener("mousedown", function (){
   this.x = event.pageX - elemLeft;
   this.y = event.pageY - elemTop;
   game.scoreKeeper(this, duck );
});

var context = canvas.getContext('2d');
const render = function () {
	// Score
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillText("Ducks hit: " + game.successfulHits+ " Shots Left: " + game.shot_count, 50, 50);
};



requestAnimationFrame(function gameLoop() {
  if(game.shot_count < 1){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText("Game Over! ", canvas.width / 2, canvas.height / 2);
  } else {
  context.clearRect(0, 0, canvas.width, canvas.height);
  render();
  duck.draw(context).move();
  requestAnimationFrame(gameLoop);
  }
});
