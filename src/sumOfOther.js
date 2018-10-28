module.exports = function sumOfOther(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let tempSum = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (i !== j) tempSum += arr[j];
    }
    result.push(tempSum);
  }
  return result;
};
