const assert = require('chai').assert;
const Game = require('../../lib/game')
const Duck = require('../../lib/duck')

describe('Integration of components', function () {

  it('can shoot and miss', function () {
    const duck = new Duck(50, 50, { height:300, width: 400})
    const game = new Game;
    var playerShotMiss = {shoot_count: 1, canvas: undefined, x: 2, y: 3};
    game.scoreKeeper(playerShotMiss, duck);
    assert.equal(game.successfulHits, 0);
  });

  it('can hit', function () {
    const duck = new Duck;
    const game = new Game;
    var playerShotHit = {shoot_count: 1, canvas: undefined, x: duck.x, y: duck.y};
    game.scoreKeeper(playerShotHit, duck);
    assert.equal(game.successfulHits, 1);
  });

  it('can keep score', function() {
    const duck = new Duck;
    const game = new Game;
    var playerShotHit = {shoot_count: 1, canvas: undefined, x: duck.x, y: duck.y};
    var playerShotMiss = {shoot_count: 1, canvas: undefined, x: 2, y: 3};
    game.scoreKeeper(playerShotHit, duck);
    game.scoreKeeper(playerShotHit, duck);
    game.scoreKeeper(playerShotMiss, duck);
    game.scoreKeeper(playerShotHit, duck);
    assert.equal(game.successfulHits, 2);
  });

  it('can only shoot at one duck three times', function () {
    const duck = new Duck;
    const game = new Game;
    var playerShotMiss = {shoot_count: 1, canvas: undefined, x: 2, y: 3};
    game.scoreKeeper(playerShotMiss, duck);
    game.scoreKeeper(playerShotMiss, duck);
    game.scoreKeeper(playerShotMiss, duck);
    assert.equal(game.successfulHits, 0);
  });

  it('restarts', function() {
    const game = new Game;
    const duck = new Duck;
    game.successfulHits = 1;
    game.shot_count = 0;
    assert.equal(game.successfulHits, 1);
    assert.equal(game.shot_count, 0);
    game.resetGame(duck);
    assert.equal(game.successfulHits, 0);
    assert.equal(game.shot_count, 3);
  });
});
