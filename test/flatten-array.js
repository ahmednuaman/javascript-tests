
/**
 * recursively flatten the array
 * @param {*} arr 
 */
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

/**
 * return the flattened sorted array
 * @param {*} arr 
 */
function flattenArray(arr) {

  var flattened = flatten(arr);
  var sorted = flattened.sort(function (a, b) {
    return a - b;
  });

  return sorted;
}


describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
      expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    arr = flattenArray(arr);
    expect(arr).toEqual(expected);
  });
});
