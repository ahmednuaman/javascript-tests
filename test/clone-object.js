describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

        Object.keys(expected).forEach(function(key, index){
          obj[key] = expected[key];
        });

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});