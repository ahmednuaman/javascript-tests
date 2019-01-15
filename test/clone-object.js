describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    for (var prop in expected) {
        if (expected.hasOwnProperty(prop)) {
            obj[prop] = expected[prop];
        }
    }

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
