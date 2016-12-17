describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
    obj = (cloneObject(expected));

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});

/**
 * Function to clone the given object
*/
function cloneObject(obj) {
    if (null === obj || 'object' !== typeof obj) {
        return obj;
    }

    var temp = obj.constructor();
    for (var key in obj) {
        temp[key] = cloneObject(obj[key]);
    }

    return temp;
}
