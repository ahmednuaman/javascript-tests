function cloneObject(src) {
	return Object.assign({}, src);
}

var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']};
var obj = cloneObject(expected);
console.log(expected);
console.log(obj);
console.log(expectNotToBe(src, clone));

function expectNotToBe(src, clone) {
	return src === clone;
}