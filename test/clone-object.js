describe('clone object', function() {
  it('should clone an object', function() {
    var expected = {
        name: 'Ahmed',
        age: 27,
        skills: ['cycling', 'walking', 'eating']
      },
      obj = {};
    for (let key in expected) {
      obj[key] = expected[key];
    }

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
