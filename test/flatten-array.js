var result = [];

describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
    expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // Call Function to flatten the array
    arr.forEach(flattenArray);

    // Sort the flattern array to get the expected output
    arr = result.sort(sortNumber);

    expect(arr).toEqual(expected);
  });

});

/**
 * Function to convert Multi D array to Flatten Array
*/
function flattenArray (item) {

	if ('null' === item) {
		return false;
	}

	if ('number' === typeof(item)) {
		result.push(item);
	} else if ('object' === typeof(item)) {
		item.forEach(flattenArray);
	}
}

/**
 * Function to sort Number array
*/
function sortNumber(a, b) {
  return a - b;
}
