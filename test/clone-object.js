describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    /* Utilised JSON method, however if expected object had inner objects or functions i would of used a for...in to iterate over the object to copy it. */
    obj = JSON.parse(JSON.stringify(expected));

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
