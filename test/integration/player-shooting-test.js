const assert = require('chai').assert;
const Game = require('../../lib/game')
const Duck = require('../../lib/duck')
const Player = require('../../lib/player')

describe('game', function () {

  it('can shoot and miss', function () {
    const duck = new Duck;
    const player = new Player;
    const game = new Game;
    var playerShot = player.shoot(2, 3);
    game.scoreKeeper(playerShot, duck);
    assert.equal(game.points, 0);
  });

  it('can hit', function () {
    const duck = new Duck;
    const player = new Player;
    const game = new Game;
    var playerShot = player.shoot(duck.x, duck.y);
    game.scoreKeeper(playerShot, duck);
    assert.equal(game.points, 1);
  });

  it('can keep score', function() {
    const duck = new Duck;
    const player = new Player;
    const game = new Game;
    var playerShot1 = player.shoot(duck.x, duck.y);
    game.scoreKeeper(playerShot1, duck);
    var playerShot2 = player.shoot(duck.x, duck.y);
    game.scoreKeeper(playerShot2, duck);
    var playerShot3 = player.shoot(4, 8);
    game.scoreKeeper(playerShot3, duck);
    var playerShot4 = player.shoot(duck.x, duck.y);
    game.scoreKeeper(playerShot4, duck);
    assert.equal(game.points, 2);
  });

  it('can only shoot at one duck three times', function () {
    const duck = new Duck;
    const player = new Player;
    const game = new Game;
    var playerShot1 = player.shoot(1, 1);
    game.scoreKeeper(playerShot1, duck);
    var playerShot2 = player.shoot(1, 1);
    game.scoreKeeper(playerShot2, duck);
    var playerShot3 = player.shoot(1, 1);
    game.scoreKeeper(playerShot3, duck);
    var playerShot4 = player.shoot(duck.x, duck.y);
    game.scoreKeeper(playerShot4, duck);
    assert.equal(game.points, 0);
  });

});
