const assert = require('chai').assert;
const Game = require('../../lib/game')

describe('Game', function () {

  it('should construct an object', function() {
    assert(new Game());
  });

  it('starts with three shots', function() {
    const game = new Game;
    assert.equal(game.shot_count, 3);
  });

  it('starts with a score of zero', function() {
    const game = new Game;
    assert.equal(game.successfulHits, 0);
  });


});
