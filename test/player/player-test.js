const assert = require('chai').assert;
const Player = require('../../lib/player')

describe('Player', function () {

  it('constructs a new object', function() {
    assert(new Player);
  });

  it('has a shoot count starting at 0', function () {
    const player = new Player;
    assert.equal(player.shoot_count, 0);
  });

  it('can detect a click', function () {
    const player = new Player;
  });
});
