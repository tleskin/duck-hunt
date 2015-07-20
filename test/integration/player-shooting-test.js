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
    game.hitIsAccurate(playerShot, duck);
    assert.equal(game.hit, false);
  });

  it('can hit', function () {
    const duck = new Duck;
    const player = new Player;
    const game = new Game;
    var playerShot = player.shoot(duck.x, duck.y);
    game.hitIsAccurate(playerShot, duck);
    assert.equal(game.hit, true);
  });
});
