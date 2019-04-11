describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    let flattenArray = array => array
      .reduce((num1, num2) => Array.isArray(num2) ? num1
       .concat(flattenArray(num2)) : num1.concat(num2), [])
       .sort((num1, num2) => a - b);
              
    expect(arr).toEqual(expected);
  });
});
