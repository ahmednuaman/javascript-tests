describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
      return Array.isArray(arr) ?
        arr.concat(flatArr(arr)) : arr.concat(arr, []);

    expect(arr).toEqual(expected);
  });
});
// I think I got the solution for the issue with the phantons browser.
//it is too old and it doesn't suport Es6
//this was my initial solution
// function flatArr(arr) {
//   return arr = [].concat(...arr);
// } 

function flatArr(arr) {
  var arr2 = [];
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      arr2.push(arr[i][j]);
    }
  }
  return arr2;
}