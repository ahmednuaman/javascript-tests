describe('flatten array', function () {
  it('should flatten an array', function () {
    const arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
        
	  	const newArr = arr.flat(Infinity).sort();
	  
    expect(newArr).toEqual(expected);
  });
});
