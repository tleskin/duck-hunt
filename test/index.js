const assert = require('chai').assert;
require('./duck/duck-test.js');
require('./integration/player-shooting-test.js');
require('./game/game-test.js');

describe('Our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});
