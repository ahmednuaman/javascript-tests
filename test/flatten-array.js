var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],

function flatten(arr1) {
	return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

var newArr = flatten(arr);

console.log(newArr.sort());