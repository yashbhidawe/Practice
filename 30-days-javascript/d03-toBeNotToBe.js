/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (val2) {
      if (val === val2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe: function (val3) {
      if (val !== val3) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
  // return valueObject;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// Approach
// Closure: The expect function leverages closures to maintain the state of the initial value val within the returned object methods.
// Encapsulation: The methods toBe and notToBe encapsulate the logic for equality checks, making the interface simple and intuitive for the user.
// Error Handling: By throwing errors when the conditions are not met, the code provides clear feedback about the failure cases, which is useful for debugging and testing.
