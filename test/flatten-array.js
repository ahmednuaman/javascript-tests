describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    
//     Using inbuilt flatten and sort functionality in a neat one liner
    arr = arr.flat(Infinity).sort(function(a, b){return a-b});

    expect(arr).toEqual(expected);
  });
});
