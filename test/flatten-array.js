describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    arr = flattenArray(arr)
    arr.sort();
    expect(arr).toEqual(expected);
  });
});

function flattenArray(array) {
  return array.reduce(function(acc, value){
    if(Array.isArray(value)){
      acc = acc.concat(flattenArray(value));
    }else{
      acc = acc.concat(value)
    }
    return acc;
  }, []);
};