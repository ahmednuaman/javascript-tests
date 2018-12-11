describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
    var expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    }

    arr = flatten(arr).sort();
    expect(arr).toEqual(expected);
  });
});
