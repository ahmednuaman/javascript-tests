describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    
    function flatten(arr) {
          var flatten = [];
          !(function flat(array) {
          array.forEach(function(el) {
            if (Array.isArray)(el)) flat(el);
            else flattend.push(el);
          });  
          }) (array);
          return flattend;
        }

       

        var flattenAndSorted = flatten(arr).sort();

        console.log(flattenAndSorted)

    expect(arr).toEqual(expected);
  });
});
