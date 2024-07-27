// This function is a versatile utility that allows you to process arrays and reduce them to a single value, using a reducer function and an initial value. It's similar to JavaScript's built-in Array.prototype.reduce method but tailored for specific use cases.

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
};
