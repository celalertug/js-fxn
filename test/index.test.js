const assert = require('assert');

const {pipe} = require('../index');


describe('test', function () {

  const add10 = a => a + 10;
  const mul2 = a => a * 2;
  const sq = a => a * a;


  it('should pipe', function () {
    const f = pipe(add10, mul2, sq);
    const res = f(5);
    assert.deepStrictEqual(res, 60);
  });

  it('should pipe single', function () {
    const f = pipe(add10);
    const res = f(100);
    assert.deepStrictEqual(res, 110);

  });
});
