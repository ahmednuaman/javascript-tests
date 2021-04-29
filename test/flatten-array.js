function flattenArray(array) {
  var arrayStringifiedFlat = JSON.stringify(array).split('[').join('').split(']').join('');
  arrayStringifiedFlat = '[' + arrayStringifiedFlat + ']';

  return JSON.parse(arrayStringifiedFlat);
}

describe('flatten array', function () {
  it('should flatten an array', function () {
    const expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];

    arr = flattenArray(arr).sort(function(a, b) { return a-b });

    expect(arr).toEqual(expected);
  });
});
