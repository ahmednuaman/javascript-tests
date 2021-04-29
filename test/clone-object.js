function clone(obj) {
  return Object.assign({}, obj);
}

describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = clone(expected);

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
