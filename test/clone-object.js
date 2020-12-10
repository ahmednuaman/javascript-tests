describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

        obj = Object.assign({}, expected)
         //or 
         obj = {...expected, skills:[...expected.skills]}

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
