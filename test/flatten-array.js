describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
		arr = arr.concat(...arr);
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    expect(arr).toEqual(expected);
  });
});