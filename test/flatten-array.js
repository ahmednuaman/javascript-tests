function flatten_array(arr, indent) {
  for (let index = 0; index < indent; index++) {
      arr = arr.reduce(function(a, b) {
          return a.concat(b);
      }, [])
  }
  return arr.sort();
}

describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    var flat = flatten_array(arr, 3);

    expect(flat).toEqual(expected);
  });
});