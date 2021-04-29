/*
* flatten-array.js
* Joined the array to create a string
* Split the string by the "," separator
* Used the map method to create a new array then 
  sorted the array to match the expected results
*/
describe('flatten array', function () {
	it('should flatten an array', function () {
		var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
		var expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

		//var arrlength = arr.length;
		//console.log("Array length = " + arrlength);

		arr = arr.join();

		arr = arr.split(',');
		
		arr = arr.map(Number);
		arr.sort();

		expect(arr).toEqual(expected);
});
});