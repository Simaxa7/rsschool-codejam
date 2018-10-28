module.exports = function make(...args) {
  const arr = [].concat(args);
  return function f (...args) {
    if (typeof (args[0]) === 'function') {
      return arr.reduce(sum);
    }
    arr.push(...args);
    return f;
  };
}

function sum(a, b) {
    return a + b;
}
