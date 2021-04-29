describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

        // obj = {...expected} 
        // can be used to make a shallow copy but would require babel

        // obj = Object.assign({}, expected)
        // also creates shallow object

        // this creates a deep clone
        obj = JSON.parse(JSON.stringify(expected))

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
