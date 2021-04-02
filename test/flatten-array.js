describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    
    const stringArr = arr.toString();
    const flattenedArr = stringArr.split(',').map(Number);

    arr = flattenedArr.sort();

    expect(arr).toEqual(expected);
  });
});