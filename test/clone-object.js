describe('clone object', function () {
  it('should clone an object', function () {
    let expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']};
    let obj = {};

    obj = JSON.parse(JSON.stringify(expected));

	 // Other solutions that are also working:

    // obj2 = { ...expected };


    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
