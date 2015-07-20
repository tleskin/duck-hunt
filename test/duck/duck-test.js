const assert = require('chai').assert;
const Duck = require('../../lib/duck')

describe('Duck', function () {

  it('should construct an object', function() {
    assert(new Duck());
  });

  it('starts alive', function () {
    const duck = new Duck();
    assert.equal(duck.alive, true );
  });

  it('can die', function () {
    const duck = new Duck();
    duck.shoot();
    assert.equal(duck.alive, false );
  });
});
