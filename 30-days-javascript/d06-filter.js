/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

// similar to JavaScript's built-in Array.prototype.filter method. This function allows you to filter elements from an array based on a callback function, giving you the flexibility to define your filtering criteria.
