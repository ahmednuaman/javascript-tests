function flatten(arr) {
  return arr.reduce(function(acc, val) {
    return acc.concat(Array.isArray(val) ? flatten(val) : val)
  }, []).sort();
}

describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = flatten([1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]]),
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    expect(arr).toEqual(expected);
  });
});
