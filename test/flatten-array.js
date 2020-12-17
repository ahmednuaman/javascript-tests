describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // arr.flat() does not work on IE

    function flatten(array) {
      if (array instanceof Array) {
        return array.length === 0
          ? []
          : flatten(array[0]).concat(flatten(array.slice(1)));
      }
      return [array];
    }

    arr = flatten(arr).sort();

    expect(arr).toEqual(expected);
  });
});
