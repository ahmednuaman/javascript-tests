describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    
    var flattenAndOrder = function(array) {

      /**
       * Check we do have an array
       */
      if (!Array.isArray(array)) {
        throw "Should be an array";
      }

      /**
       * Flatten not using concat for perf sake
       * @param {Array} value 
       * @param {Array} returnFlat 
       */
      var flatten = function(value, returnFlat) {

        /**
         * Ensure initialized array
         */
        if (!returnFlat || !Array.isArray(returnFlat)) {
          throw 'Not an array'
        }

        for(var i = 0; i < value.length; i++) {
            if(Array.isArray(value[i])) {
                flatten(value[i], returnFlat);
            } else {
                returnFlat.push(value[i]);
            }
        }
        return returnFlat;
      }

      /**
       * Flatten with one final sort
       * to optimize O(n)
       */
      var returnFinal = [];
      flatten(array, returnFinal);

      return returnFinal.sort();
    }

    arr = flattenAndOrder(arr);
    expect(arr).toEqual(expected);
  });
});