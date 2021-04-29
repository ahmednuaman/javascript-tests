describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};
    expect(obj).not.toBe(expected);
    obj = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']};
    expect(obj).toEqual(expected);
  });
});
