describe('flatten array', function () {
  it('should flatten an array', function () {
    var lodash = require('lodash/core');
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
    var expected = [1, 2, 1, 2, 3, 4, 5, 1, 2, 2];
    var flattened = lodash.flattenDeep(arr);

    expect(expected).toEqual(flattened);
  });
});