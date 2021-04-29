describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
    
    expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    
    let tempArrStr = arr.toString();
    const splittedArr = tempArrStr.split(',');
    arr = splittedArr.sort();
    arr = arr.map(Number);

    expect(arr).toEqual(expected);
  });
});
