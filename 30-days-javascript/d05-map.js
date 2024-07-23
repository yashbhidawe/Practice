// The provided code defines a map function that mimics the behavior of the built-in Array.prototype.map method. This function takes an array and a callback function as arguments and returns a new array that contains the results of applying the callback function to each element of the original array.

// approach 1
var map = function (arr, fn) {
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr[i] = fn(arr[i], i);
  }
  return finalArr;
};

//approch 2, by using array.push
// var map = function(arr, fn) {
//     const  finalArr = [];
//      for(let i = 0; i<arr.length; i++){
//          finalArr.push(fn(arr[i], i));
//      }
//      return finalArr;
//  };
