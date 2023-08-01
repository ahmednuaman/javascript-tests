describe('clone object', function () {
  it('should clone an object', function () {
    let expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
