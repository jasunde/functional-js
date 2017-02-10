function foo(x) {
  if(x < 5) return x;
  return foo(x / 2);
} 

function sum(num1, ...nums) {
  if(nums.length) return num1 + sum(...nums); 
  return num1;
}

function maxEven(num1, ...restNums) {
  var maxRest = restNums.length > 0 ?
    maxEven(...restNums) :
    undefined;

  return (num1 % 2 !== 0 || num1 < maxRest) ?
    maxRest :
    num1;
}

module.exports = {
  foo: foo,
  sum: sum,
  maxEven: maxEven
};
