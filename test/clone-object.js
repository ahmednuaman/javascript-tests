describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},    
  
        /* Shallow copy methods:
        obj = {...expected};
        obj = Object.assign({}, expected);
        */

        // Deep clone method without using external libraries
        obj = JSON.parse(JSON.stringify(expected));

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
