let adder = (function () {
  let sum = 0;
  return function (x) {
    sum += x;
    return sum;
  };
})();
console.log("sum = " + adder(3));
console.log("sum = " + adder(5));
console.log("sum = " + adder(220));
