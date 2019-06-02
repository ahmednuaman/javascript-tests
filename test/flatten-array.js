describe('flatten array', function () {
  it('should flatten an array', function () {
    arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
    expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

      var flatten = function (arr) {
        var flatMap = [];
        arr.forEach(function(value) {
          if(Array.isArray(value)) {
          flatMap = flatMap.concat(flatten(value))
        }
        else {
          flatMap.push(value)
        }
      });
      return flatMap.sort();
    }
    var arr = flatten(arr);
    console.log(arr);

    expect(arr).toEqual(expected);
  });
});
