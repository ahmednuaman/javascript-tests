describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    /*
    // ---
    // ES6 and above (not compatible with build server w/ node 3.3.1)
    // ---
    // ES10 (shortest)
    arr = arr.flat(Infinity).sort();

    // ES6 (second shortest w/ reduce function)
    var flatten = (arrIn) => {
      return arrIn.reduce((result, val) => Array.isArray(val) ? result.concat(flatten(val)) : result.concat(val), [])
    }
    arr = flatten(arr).sort();
    */

    
    // ---
    // ES5 (more verbose w/ for-loop)
    // ---
    var flattenES5 = function(arrIn){
      var result = [];
      for(var i = 0; i < arrIn.length; i++) {
          if(arrIn[i] instanceof Array === true) { // (Alternative vs Array.isArray)
            result = result.concat(flattenES5(arrIn[i]));
          } else {
            result.push(arrIn[i]);
          }
      }
      return result;
    }
    arr = flattenES5(arr).sort();


    expect(arr).toEqual(expected);
  });
});