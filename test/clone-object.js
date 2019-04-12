describe('clone object', function () {
  it('should clone an object', function () {
    const expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},

        const clone = JSON.parse(JSON.stringify(expected));

    expect(clone).toEqual(expected);
    expect(clone).not.toBe(expected);
  });
});
