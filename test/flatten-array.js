describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
    expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
        strArr = arr.toString();
        splArr = strArr.split(',');
        sorArr = splArr.sort();
        comArr = sorArr.map(Number);

    expect(comArr).toEqual(expected);
  });
});