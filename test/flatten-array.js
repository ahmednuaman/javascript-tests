describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // Flattens array of infinite depth
    arr = arr.flat(Infinity);

    // Sorts array to give expected output
    arr = arr.sort();

    expect(arr).toEqual(expected);
  });
});