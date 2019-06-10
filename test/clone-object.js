describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    // This is not supported in Internet Explorer, if Internet Explorer is required, then use the solution below.
    // This is also not suitable for deep cloning of an object.
    obj = Object.assign({}, expected);

    // This isn't as nice, but supports Internet Explorer and deep cloning:
    // obj = JSON.parse(JSON.stringify(expected));

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
