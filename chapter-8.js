function map(mapperFn,arr) {
    var newList = [];

    for (let idx = 0; idx < arr.length; idx++) {
        newList.push(
            mapperFn( arr[idx], idx, arr )
        );
    }

    return newList;
}

var array = [0,1,2,3,4,5];
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
