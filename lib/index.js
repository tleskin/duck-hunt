const Game = require('./game');
const Duck = require('./duck');

var canvas = document.getElementById('game');
var elemLeft = canvas.offsetLeft;
var elemTop = canvas.offsetTop;

const duck = new Duck(50, 50, canvas);
const game = new Game();

canvas.addEventListener("mousedown", function (){
   this.x = event.pageX - elemLeft;
   this.y = event.pageY - elemTop;
   game.scoreKeeper(this, duck );
});

// Grass image
var grassReady = false;
var grassImage = new Image();
grassImage.onload = function () {
	grassReady = true;
};
grassImage.src = "./lib/images/grass.png";

// Grass image
var duckReady = false;
var duckImage = new Image();
duckImage.onload = function () {
	duckReady = true;
};
duckImage.src = "./lib/images/duck.png";


var context = canvas.getContext('2d');
const render = function () {

  if (duckReady) {
    context.drawImage(duckImage, duck.x, duck.y );
  }
  if (grassReady) {
		context.drawImage(grassImage, 0, 450 );
	}

	context.fillStyle ="rgb(0, 0, 0)";
  context.font="30px Arial";
  context.fillRect(175, 550, 350, 50);
  context.fillStyle="red";
	context.fillText("Ducks hit: " + game.successfulHits + " Shots Left: " + game.shot_count,  180, 585);
  context.lineWidth= "6";
  context.strokeStyle="green";
  context.rect(175, 550, 350, 50);
  context.stroke();

};

var restart = function() {
  game.resetGame(duck);
  duck.canvas = canvas;
  context.clearRect(0, 0, canvas.width, canvas.height);
  duck.draw(context).move();
};

var playAgain = function () {
  context.fillStyle="red";
  context.fillRect(280, 330, 160, 40);
  context.fillStyle="white";
  context.fillText("Play Again?", 280, 360);
};

var redrawGame = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  duck.draw(context).move();
  render();
};

  requestAnimationFrame(function gameLoop() {
  if(game.shot_count < 1 || game.successfulHits > 0){
    if (game.shot_count < 1 && game.successfulHits < 1) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle="red";
      context.fillText("Game Over! Ducks win!", 200, 300);
      playAgain.call(this);
      canvas.addEventListener("mousedown", function (){
         this.x = event.pageX - elemLeft;
         this.y = event.pageY - elemTop;
         if (this.x>=280 && this.x<=442 && this.y>=330 && this.y<=372) {
           restart.call(this);
           requestAnimationFrame(gameLoop);
           }
      });
    } else if ( duck.y + 20 < canvas.height){
      context.clearRect(0, 0, canvas.width, canvas.height);
      duck.draw(context).move();
      render();
      requestAnimationFrame(gameLoop);
    } else if (duck.x <= (canvas.x + 62)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillText("You win!", 300, 300);
      playAgain.call(this);
      canvas.addEventListener("mousedown", function (){
         this.x = event.pageX - elemLeft;
         this.y = event.pageY - elemTop;
         if (this.x>=280 && this.x<=442 && this.y>=330 && this.y<=372) {
           restart.call(this);
           requestAnimationFrame(gameLoop);
           }
      });

    }
  } else {
    redrawGame.call(this);
    requestAnimationFrame(gameLoop);
  }
});
