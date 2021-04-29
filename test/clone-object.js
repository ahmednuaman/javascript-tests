describe('clone object', function () {
  it('should clone an object', function () {
    const expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
      const obj = {...expected}
       // Alternatively there is another way to do this using map
       // const obj = new Map(Object.entries(expected))

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
