describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    
//     Using inbuilt flatten and sort functionality in a neat one liner
    const arrAsString = arr.toString();
    const flatArr = arrAsString.split(',').map(Number);

    arr = flatArr.sort();

    expect(arr).toEqual(expected);
  });
});
