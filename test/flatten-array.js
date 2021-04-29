describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
		
	var flatten = arr.toString().split(',').map(Number);
	arr = flatten.sort();


	 // Another possible solution is:			
     //   arr = arr.flat(3).sort();

    expect(arr).toEqual(expected);
  });
});