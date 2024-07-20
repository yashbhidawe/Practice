const createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

// Why This Works:
// Closure: The inner function forms a closure. It captures the lexical scope of the outer function, but in this case, it doesn't use any variables from the outer function.
// Higher-Order Function: createHelloWorld is a higher-order function because it returns another function.
