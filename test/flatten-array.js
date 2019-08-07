describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
    var expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

  //enabling deep level flatten use recursion using reduce and concat methods
     function flatten(arr) {
       return arr.reduce(function (flat, val) => Array.isArray(val) ? flat.concat(flatten(val)) : flat.concat(val), []);
     }
     //sorting out an array in ascending order
     arr = flatten(arr).sort();
    expect(arr).toEqual(expected);
  });
});
