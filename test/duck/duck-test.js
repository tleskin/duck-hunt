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

  it('has a starting position', function () {
    const duck = new Duck();
    assert.equal(duck.x, 0 );
    assert.equal(duck.y, 0 );
  });

  it('can move', function () {
    const duck = new Duck();
    duck.fly();
    assert.equal(duck.x, 1 );
    assert.equal(duck.y, 1 );
  });
});
