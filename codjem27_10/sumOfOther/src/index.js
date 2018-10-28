module.exports = function sumOfOther(arr) {
  const result = new Array(arr.length).fill(arr.reduce((a, b) => a + b));
  for (let i = 0; i < arr.length; i++) {
    result[i] -= arr[i];
  }
  return result;
};
