describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    
    //SOLUTION
    let flatAndSortArray = arr => {
      
      //Finding the depth of the array
      let arrayDepth= arr=>Array.isArray(arr)? Math.max(...arr.map(arrayDepth))+1:0;
      
      //Flattening and sorting
      return arr.flat(arrayDepth(arr))
       .sort((a, b) => a-b);
    };
    
    expect(arr).toEqual(expected);
    expect(flatAndSortArray(arr).toEqual(expected));
  });
});