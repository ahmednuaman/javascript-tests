describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};
        
        for (let prop in expected) {
            obj[prop] = expected[prop];
        }

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
