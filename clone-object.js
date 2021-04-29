describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};
		if (expected instanceof Object){
		obj = expected.constructor();
		for (var attr in expected) {
			if (expected.hasOwnProperty(attr)) 
				obj[attr] = expected[attr];
		}
    }
    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});