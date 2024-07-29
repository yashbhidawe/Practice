/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let isCalled = false;
  return function (...args) {
    if (isCalled === true) return undefined;
    isCalled = true;
    return fn(...args);
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Approach
// Closure: The once function uses closures to maintain the isCalled state, ensuring that the wrapped function can only be called once.
// Higher-Order Function: This pattern is a common higher-order function approach, where once returns a new function that wraps around the original function fn.
// Function Guard: By setting isCalled to true after the first invocation, the function ensures that subsequent calls do not execute fn again, effectively guarding the function against multiple invocations.
