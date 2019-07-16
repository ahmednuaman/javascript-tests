/**
 * This function converts to Json and copies from there
 */
 

function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}


describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = jsonCopy(expected);

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
