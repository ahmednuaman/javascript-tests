describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    var flatten = function(item, result) {
      if (Object.prototype.toString.call(item) == '[object Array]') {
        for (var i in item) {
          flatten(item[i], result);
        }
      } else {
        result.push(item);
      }

      return result;
    };

    arr = flatten(arr, []);
    arr.sort();

    expect(arr).toEqual(expected);
  });
});