// Currying

function curry(fn, arity = fn.length) {
  console.log('arity', arity);
  return (function nextCurried(prevArgs) {
    console.log('prevArgs', prevArgs);
    return function curried(nextArg) {
      var args = prevArgs.concat( [nextArg] );

      if(args.length >= arity) {
        return fn( ...args );
      } else {
        return nextCurried( args );
      }
    }
  })( [] );
}

function add(x,y) {
  return x + y;
}

var added3 = [1,2,3,4,5].map( curry( add )( 3 ) );

console.log('added3', added3);
