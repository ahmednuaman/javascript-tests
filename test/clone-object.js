// Object assign - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

describe('clone object', function () {
  it('should clone an object', function () {
    
    var expected = {
      name: 'Ahmed', 
      age: 27, 
      skills: ['cycling', 'walking', 'eating']
    },
    obj = Object.assign(
      {}, 
      expected
      );

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
