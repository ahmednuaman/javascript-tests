describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // This isn't supported in Internet Explorer or Edge.
    // arr = arr.flat(5);

    // This is supported in everything, but not as nice.
    function flattenDeep(arr) {
      return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
    }

    arr = flattenDeep(arr);

    expect(arr).toEqual(expected);
  });
});