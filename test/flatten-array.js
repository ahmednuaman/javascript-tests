describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]]; // expected must be equal to actual 

    expect(arr).toEqual(expected);
  });
});