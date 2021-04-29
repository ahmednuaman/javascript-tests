describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};
      // simple one liner to deep clone an object, (regarded to be the fastest method for deep cloning objects?)
        obj = JSON.parse(JSON.stringify(expected));

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
