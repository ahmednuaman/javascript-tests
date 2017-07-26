describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = clone(expected);

    function clone(original) {
      var jsonFomrat = JSON.stringify(original);
      
      return JSON.parse(jsonFomrat);
    }

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
