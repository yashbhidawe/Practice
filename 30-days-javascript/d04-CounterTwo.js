/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentCount = init;
  return {
    increment: () => ++currentCount,
    decrement: () => --currentCount,
    reset: () => (currentCount = init),
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 *
 *
 * This approach provides a clean and efficient way to create counters with the ability to increment, decrement, and reset the count. The use of closures ensures that the counter's state is maintained across method calls, and the encapsulation of state within the object makes the implementation robust and secure.
 */
