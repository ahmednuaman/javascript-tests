describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // init vars
    var output = [];
    var count = 0;

    // build recursive function
    recursiveFunc = function (recArr) {
      if (Array.isArray(recArr)) {
        // if parameter is an array then iterate each position
        for (z=0; z<recArr.length; z++) {
          var nextArr = recArr[z];
          // check if it is an array and has more than 1 entry then recurvisve call
          if (Array.isArray(nextArr)) {
            if (nextArr.length > 1) {
              recursiveFunc(nextArr);
            } else {
              // if it is an array of only 1 then no need to call recursive just add to output
              output[count]=nextArr[0];
              count++;
            }            
          } else {
            //not an array just add
            output[count]=nextArr;
            count++;
          }          
        }
      } else {
        // not an array just add to output
        output[count]=recArr;
        count++;
      }
    };

    // iterate top level array all the way through
    for (i=0; i<arr.length; i++) {
      // create constant from next value
      const newarr = arr[i];
      // start processing
      recursiveFunc(newarr);
    }

    arr = output.sort();
    
    expect(arr).toEqual(expected);
  });
});