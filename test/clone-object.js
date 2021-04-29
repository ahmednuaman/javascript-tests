describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']};
        
    //SOLUTION - Deep copy
    let cloneObject = obj => JSON.parse(JSON.stringify(obj));
    
    var obj = cloneObject(expected);

        
    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);  
    
  });
});