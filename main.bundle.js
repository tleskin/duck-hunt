/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Game = __webpack_require__(2);
	var Duck = __webpack_require__(3);

	var canvas = document.getElementById('game');
	var elemLeft = canvas.offsetLeft;
	var elemTop = canvas.offsetTop;

	var duck = new Duck(50, 50, canvas);
	var game = new Game();

	canvas.addEventListener("mousedown", function () {
	  context.fillStyle = "white";
	  context.fillRect(0, 0, canvas.width, canvas.height);
	  this.x = event.pageX - elemLeft;
	  this.y = event.pageY - elemTop;
	  game.scoreKeeper(this, duck);
	});

	// Load scenery image
	var grassReady = false;
	var grassImage = new Image();
	grassImage.onload = function () {
	  grassReady = true;
	};
	grassImage.src = "./lib/images/stage.png";

	// Load duck image
	var duckReady = false;
	var duckImage = new Image();
	duckImage.onload = function () {
	  duckReady = true;
	};
	duckImage.src = "./lib/images/duck.png";

	var context = canvas.getContext('2d');
	var render = function render() {

	  if (duckReady) {
	    context.drawImage(duckImage, duck.x, duck.y);
	  }
	  if (grassReady) {
	    context.drawImage(grassImage, 0, 85);
	  }

	  scoreboard.call(this);
	};

	var scoreboard = function scoreboard() {
	  context.fillStyle = "rgb(0, 0, 0)";
	  context.font = "30px Arial";
	  context.fillRect(175, 550, 350, 50);
	  context.fillStyle = "red";
	  context.fillText("Ducks hit: " + game.successfulHits + " Shots Left: " + game.shot_count, 180, 585);
	  context.lineWidth = "6";
	  context.strokeStyle = "green";
	  context.rect(175, 550, 350, 50);
	  context.stroke();
	};

	var restart = function restart() {
	  game.resetGame(duck);
	  duck.canvas = canvas;
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  duck.draw(context).move();
	};

	var playAgain = function playAgain(message, messageX, messageY) {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  context.fillStyle = "red";
	  context.fillText(message, messageX, messageY);
	  context.fillStyle = "red";
	  context.fillRect(280, 330, 160, 40);
	  context.fillStyle = "white";
	  context.fillText("Play Again?", 280, 360);
	};

	var redrawGame = function redrawGame(gameLoop) {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  duck.draw(context).move();
	  render();
	  requestAnimationFrame(gameLoop);
	};

	var restartListener = function restartListener(gameLoop, message, messageX, messageY) {
	  canvas.addEventListener("mousedown", function () {
	    this.x = event.pageX - elemLeft;
	    this.y = event.pageY - elemTop;
	    if (this.x >= 280 && this.x <= 442 && this.y >= 330 && this.y <= 372) {
	      restart.call(this);
	      requestAnimationFrame(gameLoop);
	    } else {
	      playAgain.call(this, message, messageX, messageY);
	    }
	  });
	};

	requestAnimationFrame(function gameLoop() {
	  if (game.shot_count < 1 || game.successfulHits > 0) {
	    if (game.shot_count < 1 && game.successfulHits < 1) {
	      playAgain.call(this, "Game over! Ducks win!", 200, 300);
	      restartListener.call(this, gameLoop, "Game over! Ducks win!", 200, 300);
	    } else if (duck.y + 20 < canvas.height) {
	      redrawGame.call(this, gameLoop);
	    } else if (duck.x <= canvas.x + 62) {
	      playAgain.call(this, "You win!", 300, 300);
	      restartListener.call(this, gameLoop, "You win!", 300, 300);
	    }
	  } else {
	    redrawGame.call(this, gameLoop);
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	function Game() {
	  this.successfulHits = 0;
	  this.shot_count = 3;
	}

	Game.prototype.scoreKeeper = function (shot, duck) {
	  if (shot.x <= duck.x + 62 && duck.x <= shot.x + 62 && shot.y <= duck.y + 56 && duck.y <= shot.y + 56) {
	    if (this.shot_count > 0) {
	      this.successfulHits++;
	      duck.alive = !duck.alive;
	    }
	  }
	  this.shot_count--;
	  return this;
	};

	Game.prototype.resetGame = function (duck) {
	  this.successfulHits = 0;
	  this.shot_count = 3;
	  duck.x = Math.random();
	  duck.width = 50;
	  duck.height = 56;
	  duck.y = 455;
	  duck.alive = true;
	  duck.slopeX = 4;
	  duck.slopeY = 6;
	};

	module.exports = Game;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	function Duck(x, y, canvas) {
	  this.alive = true;
	  this.x = [25, 50, 75].sample();
	  this.width = 50;
	  this.height = 56;
	  this.y = 455;
	  this.slopeX = 4;
	  this.slopeY = 6;
	  this.canvas = canvas;
	}

	Array.prototype.sample = function () {
	  return this[~ ~(Math.random() * this.length)];
	};

	Duck.prototype.move = function () {
	  if (this.alive) {
	    flyRandomly.call(this);
	  } else {
	    fallDown.call(this);
	  }
	};

	Duck.prototype.draw = function (context) {
	  context.fillStyle = "transparent";
	  context.fillRect(this.x, this.y, this.width, this.height);
	  return this;
	};

	Duck.prototype.shot = function () {
	  this.alive = !this.alive;
	  return this;
	};

	var flyRandomly = function flyRandomly() {
	  if (this.x + this.slopeX > this.canvas.width || this.x + this.slopeX < 0) {
	    this.slopeX = -this.slopeX;
	    this.x -= this.slopeX;
	    this.y -= this.slopeY;
	  }
	  if (this.y + this.slopeY > this.canvas.height - 75 || this.y + this.slopeY < 0) this.slopeY = -this.slopeY;
	  this.x += this.slopeX;
	  this.y += this.slopeY;
	};

	var fallDown = function fallDown() {
	  this.y += 10;
	};

	module.exports = Duck;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

/***/ }
/******/ ]);