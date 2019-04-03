describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
    // var arr2 = arr.flat(Infinity);
    // arr = arr2.sort();
    expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
        arr = arr.toString();
        arr = arr.split(',');
        arr = arr.sort();
        arr = arr.map(Number);

    expect(arr).toEqual(expected);
  });
});