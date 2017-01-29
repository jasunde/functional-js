function assignObject({x = 0, y}) {
  console.log('x:', x);
  console.log('y:', y);
  return x + y;
}

assignObject({y: 2});

// Closures

function message(msg) {
  var fn = function () {
    console.log(msg);
  };

  return fn;
}

var hello = message('hello');

hello();

// scope closure is a live link rather than a snapshot

function runningTotal(start) {
  let val = start;

  return function current(increment = 1) {
    val += increment;
    console.log('current total:', val);
    return val;
  }
}

var score = runningTotal(0);
var score2 = runningTotal(0);

score();
score();
score(7);

score2();
score2();
score2();
