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
    duck.shot();
    assert.equal(duck.alive, false );
  });

  it('has a starting position and velocity', function () {
    const duck = new Duck();
    assert.equal(duck.x, 50 );
    assert.equal(duck.y, 100 );
    assert.equal(duck.velocity, 256 );
  });

  it('can move', function () {
    const duck = new Duck();
    duck.fly();
    assert.equal(duck.x, 306 );
    assert.equal(duck.y, 356 );
  });
});
