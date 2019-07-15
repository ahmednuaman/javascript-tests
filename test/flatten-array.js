// Infinity property - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
// flat() method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// sort() method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// arrow function expression - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    arr = arr
      .flat(Infinity)
      .sort(
        (a, b)=> a - b
        );

    expect(arr).toEqual(expected);
  });
});