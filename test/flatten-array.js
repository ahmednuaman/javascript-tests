describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
 function flatten_arr(arr) {
  var temp = [];
  function flatContinous(arr) { 
    for(var i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        flatContinous(arr[i]);
      } else {
        temp.push(arr[i]);
      }
    }
  }
  flatContinous(arr);
  return temp.sort();
}
    expect(flatten_arr(arr)).toEqual(expected);
  });
});