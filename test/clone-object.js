describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

        function cloneObject(o) {
          return JSON.parse(JSON.stringify(o));
        }

        obj = cloneObject(expected)

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
