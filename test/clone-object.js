describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};
         angular.copy(expected, obj);
    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
