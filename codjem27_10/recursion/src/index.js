module.exports = function recursion(myObjTree) {
  const arr = [];

  const getArr = (obj, step) => {
    if (arr[step]) {
      arr[step] = arr[step].concat([obj.value]);
    } else {
      arr[step] = [obj.value];
    }
    if (obj.left) getArr(obj.left, step + 1);
    if (obj.right) getArr(obj.right, step + 1);

    return null;
  };

  getArr(myObjTree, 0);

  return arr;
}
