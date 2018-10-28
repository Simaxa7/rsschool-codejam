const assert = require('assert');
const sumOfOther = require('./src/index');
describe ('should return arr sum of all element except carrent elemement', () => {
  it ('1', () => {
    const arr = sumOfOther([7, 16, 21, 57, 12]);
    assert.equal(JSON.stringify(arr), JSON.stringify([106, 97, 92, 56, 101]));
  });

  it('2', () => {
    const arr = sumOfOther([1,2,3,4]);
    assert.equal(JSON.stringify(arr), JSON.stringify( [9, 8, 7, 6]));
  });

  it('3', () => {
    const arr = sumOfOther( [2,17,1,16]);
    assert.equal(JSON.stringify(arr), JSON.stringify([34, 19, 35, 20]));
  });

  it('4', () => {
    const arr = sumOfOther([1]);
    assert.equal(JSON.stringify(arr), JSON.stringify([0]));
  });

  it('5', () => {
    const arr = sumOfOther([0, 2, 1]);
    assert.equal(JSON.stringify(arr), JSON.stringify( [3, 1, 2]));
  });

  it('6', () => {
    const arr = sumOfOther([10, 3, 5, 1, 15]);
    assert.equal(JSON.stringify(arr), JSON.stringify([24, 31, 29, 33, 19]));
  });

});
