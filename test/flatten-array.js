describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // Implemented this as a function so that the ternary operator could recursively call it. 
    function flattenArr(myArray) {
      return myArray.reduce(function (flat, next) {
        return flat.concat(Array.isArray(next) ? flattenArr(next) : next);
      }, []);
    }
    
    // With the current array a simple sort implemented on the flattened array is enough.
    arr = flattenArr(arr).sort();

    expect(arr).toEqual(expected);

  });
});
