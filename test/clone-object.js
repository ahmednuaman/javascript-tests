describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};
        
        //SOLUTION - Deep copy
        let cloneObject = obj => JSON.parse(JSON.stringify(obj));
    
        
    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);  
    
    expect(cloneObject(expected)).toEqual(expected);
    expect(cloneObject(expected)).not.toBe(expected);
    
  });
});
