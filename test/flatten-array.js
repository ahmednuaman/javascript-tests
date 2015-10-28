describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    arr = arr.join().split(',').sort();

		for(var i=0;i<arr.length;i++){
			return arr[i];
		}
    expect(arr).toEqual(expected);
  });
});