describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    function flat (nestedArray) {
      var flattedArray = [];
      nestedArray.forEach(function (nestedElement) {
        if (typeof nestedElement === 'number') {
          flattedArray.push(nestedElement);
          return;
        }

        flattedArray = flattedArray.concat(flat(nestedElement));

        flattedArray.sort();
      });
      return flattedArray;
    }

    expect(flat(arr)).toEqual(expected);
  });
});