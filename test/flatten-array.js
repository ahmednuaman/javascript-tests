describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
        function flattenArr(inputArr) {
          return inputArr.reduce((acc, elem) => Array.isArray(elem) ? acc.concat(flattenArr(elem)) : acc.concat(elem), []);
        }
        arr = flattenArr(arr).sort();
    arr = arr.flat();
    expect(arr).toEqual(expected);
  });
});