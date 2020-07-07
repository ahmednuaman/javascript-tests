describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    var flatten = function(a) {
      var res = [];

      for(var i = 0; i < a.length; i++) {
        if(Array.isArray(a[i])) {
          res = res.concat(flatten(a[i]))
        } else {
          res.push(a[i]);
        }
      }
      return res.sort();
    };

    arr = flatten(arr);

    expect(arr).toEqual(expected);
  });
});