//clone-object.js

describe('clone object', function () {
	it('should clone an object', function () {
		var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
		obj = {};
		// console.log(expected);

		for (var attr in expected) {
			if (expected.hasOwnProperty(attr)){
				obj[attr] = expected[attr];
			}
		}

	    // console.log(obj);
	    expect(obj).toEqual(expected);
	    expect(obj).not.toBe(expected);
	});
});