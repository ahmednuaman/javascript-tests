describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    }
    
    // The expected array implies that sorting is needed, I decided to pass
    // a function in here because default sort is alphabetical and would fail
    // on something like [140000, 104, 99], otherwise just .sort() is fine
    arr = flatten(arr).sort(function (a, b) { return a - b; });

    expect(arr).toEqual(expected);
  });
});
