const assert = require('assert');

Object.freeze(assert);

const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe('sumOfOther', () => {
  it('1', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('2', () => {
    const result = sumOfOther([1, 0, 2, 1]);
    assert.deepEqual(result, [3, 4, 2, 3]);
  });

  it('3', () => {
    const result = sumOfOther([2, 8, 4, 1]);
    assert.deepEqual(result, [13, 7, 11, 14]);
  });

  it('4', () => {
    const result = sumOfOther([2, 4, 4, 3]);
    assert.deepEqual(result, [11, 9, 9, 10]);
  });

  it('5', () => {
    const result = sumOfOther([2, 1, 5, 1]);
    assert.deepEqual(result, [7, 8, 4, 8]);
  });
});

describe('make', () => {
  it('1', () => {
    const sum = (a, b) => a + b;
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });

  it('2', () => {
    const sum = (a, b) => a + b;
    const result = make(5)(23, 76, 42)(21, 12)(sum);
    assert.equal(result, 179);
  });

  it('3', () => {
    const sum = (a, b) => a + b;
    const result = make(76)(130, 1867)(1654, 423, 12)(sum);
    assert.equal(result, 4162);
  });

  it('4', () => {
    const sum = (a, b) => a + b;
    const result = make(1)(11, 111, 1111)(sum);
    assert.equal(result, 1234);
  });

  it('5', () => {
    const sum = (a, b) => a + b;
    const result = make(1)(1, 1, 1)(1, 1, 1, 1)(sum);
    assert.equal(result, 8);
  });
});
