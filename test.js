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
