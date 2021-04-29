describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
      expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // A more flexible approach if array depth is unknown
    array = arr.flat(infinity).sort();
    // In this test example the following works as well
    // array = arr.flat(3).sort();

    expect(array).toEqual(expected);
  });
});


