function map(mapperFn,arr) {
    var newList = [];

    for (let idx = 0; idx < arr.length; idx++) {
        newList.push(
            mapperFn( arr[idx], idx, arr )
        );
    }

    return newList;
}

var array = [1,2,3,4,5];
var double = x => x * 2;
var toChar = x => String.fromCharCode(x + 65);

var result = map(toChar, array)
console.log('result', result);

function not(predicate) {
  return function negated(...args) {
    return !predicate(...args);
  }
}

function filterIn(predicate,arr) {
    var newList = [];

    for (let idx = 0; idx < arr.length; idx++) {
        if (predicate( arr[idx], idx, arr )) {
            newList.push( arr[idx] );
        }
    }

    return newList;
}

function filterOut(predicate, arr) { 
  return filterIn( not( predicate ), arr );
}

var isEven = x => x % 2 === 0;
var evens = filterIn(isEven, array);
console.log('evens', evens);

function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(...nextArgs) {
      var args = prevArgs.concat( nextArgs );

      if(args.length >= arity) {
        return fn( ...args );
      } else {
        return nextCurried( args );
      }
    }
  })( [] );
}

function unboundMethod(methodName, argCount = 2) {
  return curry(
    function(...args) {
      var obj = args.pop();
      return obj[methodName](...args)
    },
    argCount
  );
}

var reduce = unboundMethod('reduce', 3);
var map = unboundMethod('map', 2);
console.log('unbound map', reduce((acc, cur) => acc * cur)(1)(array));

var guard = function (fn) {
  return function guarded(arg) {
    return (arg !== null) ? fn(arg) : arg;
  }
}

var sum = curry(reduce)((x,y) => x + y)(0);
var evens = curry(filterOut)(isEven);
var guardedFns = [evens, sum].map(guard);

// function compose(...fns) { 
//   return function composed(result) {
//     var list = fns.slice();

//     while(list.length > 0) {
//       result = list.pop()( result );
//     }

//     return result;
//   }
// }

// function compose(...fns) {
//   return function composed(result) {
//     return fns.reverse().reduce(function (result, fn) {
//       return fn( result );
//     },
//     result);
//   }
// }

function compose(...fns) {
  return fns.reverse().reduce(function reducer(fn1, fn2) {
    return function composed(...args) {
      return fn2( fn1( ...args ));
    };
  } );
}

function reverseArgs(fn) {
  return function argsReversed(...args) {
    return fn(...args.reverse());
  };
}

var pipe = reverseArgs( compose );

var sum = curry(reduce)((x,y) => x + y)(0);
var evens = curry(filterIn)(isEven);
var guardedFns = [evens, sum].map(guard);

var sumEvens = compose( sum, evens );

var summedEvens = pipe(...guardedFns)

console.log('specialAdd', sumEvens([1,2,3,4]));

