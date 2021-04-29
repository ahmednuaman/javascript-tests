describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
      expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5],
      flatten = function(arr) {
        return arr.reduce(function(prev, curr, idx) {
          if (typeof curr === 'object' && curr.hasOwnProperty('length') && curr.length > 1) {
              return prev.concat(flatten(curr));
          } else {
               return prev.concat(curr);
         }
       }, []).sort();
      };
      expect(flatten(arr)).toEqual(expected);
  });
});
