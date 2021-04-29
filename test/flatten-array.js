describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

        const flatten = function(arr, result = []) {
          for (let i = 0, length = arr.length; i < length; i++) {
            const value = arr[i];
            if (Array.isArray(value)) {
              flatten(value, result);
            } else {
              result.push(value);
            }
          }
          return result;
        };
        var newArray = flatten(arr);

      arr = newArray.sort((a, b) => a - b);
      
    expect(arr).toEqual(expected);
  });
});