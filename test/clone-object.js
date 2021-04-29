describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    var clone = function(o) {
      return JSON.parse(JSON.stringify(o))
    };

    obj = clone(expected);

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
