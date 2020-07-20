describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    function flatten (arr) {
      return arr.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(flatten(curr)): acc.concat(curr), [])
    }
    
    arr = flatten(arr).sort()

    expect(arr).toEqual(expected);
  });
});