describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

        function flattenArray(a) {
          var flattened = [];

          a.forEach(function(element) {
            if(Array.isArray(element)) {
              flattened = flattened.concat(flattenArray(element))
            }
            else if(typeof(element) === 'number') {
              flattened.push(element);
            }
          });

          return flattened.sort();
        }

        arr = flattenArray(arr);

    expect(arr).toEqual(expected);
  });
});