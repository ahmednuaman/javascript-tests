describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
	
		function flatten(tempArray) {
			var flattenedArray = [];
			for(var i = 0; i < tempArray.length; i++) {
				if(Array.isArray(tempArray[i])) {
					flattenedArray.push(...flatten(tempArray[i]));
				}
				else {
					flattenedArray.push(tempArray[i]);
				}
			}
			return flattenedArray.sort();
		}

		arr = flatten(arr);
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    expect(arr).toEqual(expected);
  });
});