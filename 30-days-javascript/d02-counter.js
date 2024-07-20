//approach one:
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

//approch two:

/** 
var createCounter =(n)=>{
    return ()=> n++;
    }
 */
