//clone-object.js

describe('clone object', function () {
	it('should clone an object', function () {
		var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
		obj = {};

		obj = Object.assign({}, expected);
        //console.log(obj);
        
        expect(obj).toEqual(expected);
        expect(obj).not.toBe(expected);
    });
});