var cloneDeep = require('lodash/cloneDeep');

describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    // spread syntax could be used in modern ES, obj = { ...expected }
    obj = cloneDeep(expected);

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
