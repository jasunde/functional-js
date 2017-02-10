var chap9 = require('../chapter-9');
var sum = chap9.sum;
var maxEven = chap9.maxEven;

describe('foo', function () {
  it('should run foo', function () {
    expect(chap9.foo(1)).toEqual(1);
    expect(chap9.foo(6)).toEqual(3);
    expect(chap9.foo(10)).toEqual(2.5);
    expect(chap9.foo(100)).toEqual(3.125);
  });
});

describe('sum', function () {
  it('should sum all the arguments', function () {
    expect(sum(0)).toEqual(0);
    expect(sum(0,1)).toEqual(1);
    expect(sum(1,1)).toEqual(2);
    expect(sum(1,1,1)).toEqual(3);
    expect(sum(-1,1)).toEqual(0);
  })
})

describe('maxEven', function () {
  it('should return the largest even number in a list', function () {
    expect(maxEven(0)).toEqual(0);
    expect(maxEven(1)).toBeUndefined();
    expect(maxEven(1,3)).toBeUndefined();
    expect(maxEven(1,2,3)).toEqual(2);
    expect(maxEven(2,4,6)).toEqual(6);
    expect(maxEven(6,4,2)).toEqual(6);
  })
})
