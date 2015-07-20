const assert = require('chai').assert;
require('./duck/duck-test.js');
require('./player/player-test.js');
require('./integration/player-shooting-test.js');

describe('Our test bundle', function () {
  it('should work', function () {
    assert(true);
  });

});
