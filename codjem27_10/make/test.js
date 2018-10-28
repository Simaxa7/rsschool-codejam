const assert = require('assert');
const make = require('./src/index');

function sum(a, b) {
    return a + b;
}

describe('Summ of all incoming elemets', () => {
  it('1', () => {
    const input = make(15)(34, 21, 666)(41)(sum);
    assert.equal(input, 777);
  });

  it('2', () => {
    const input = make()()(41)(sum);
    assert.equal(input, 41);
  });

  it('3', () => {
    const input = make(123)(22)(2)(sum);
    assert.equal(input, 147);
  });

  it('4', () => {
    const input = make(1231, 213, 324, 23, 123)(123, 123, 54, 6, 7, 34)(-2000)(sum);
    assert.equal(input, 261);
  });
});
