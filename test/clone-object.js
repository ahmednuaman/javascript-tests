describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

	obj=expected;
	expect(obj).toEqual(expected);

	obj=JSON.parse(JSON.stringify(expected))
	expect(obj).not.toBe(expected);
  });
});
