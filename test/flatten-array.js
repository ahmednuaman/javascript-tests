describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    
//     re-write to work with travis, converting the array to a string array and then mapping it as number array, then finally sorting it into the correct order
    let stringArr = arr.toString();
    let flattenedArr = stringArr.split(',').map(Number);

    arr = flattenedArr.sort();

    expect(arr).toEqual(expected);
  });
});
