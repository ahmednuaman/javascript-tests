describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
  var arr1 = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
   var arr2 = [].concat.apply([], arr1);
    var arr3 = [].concat.apply([],arr2);
     var flatten = [].concat.apply([],arr3);
  flatten.sort()
    expect(arr).toEqual(expected);
  });
});
