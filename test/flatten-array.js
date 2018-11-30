describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
	
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		function flatten(tempArray) {
			var flattenedArray = [];
			for(var i = 0; i < tempArray.length; i++) {
				if(Array.isArray(tempArray[i])) {
					//flattenedArray.push(...flatten(tempArray[i]));
					flattenedArray.push.apply(flattenedArray, _toConsumableArray(flatten(tempArray[i])));
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