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
    assert.equal(duck.x, duck.x );
    assert.equal(duck.y, 455 );
  });

  it('can move', function () {
    // const duck = new Duck();
    const duck = new Duck(50, 50, { height:300, width: 400});
    duck.move();
    assert.notEqual(duck.x, 50 );
  });
});
