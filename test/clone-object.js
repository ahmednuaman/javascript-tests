describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    // Used JSON method because ES5 - but would use Object.assign for ES6+
    obj = JSON.parse(JSON.stringify(expected));

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
