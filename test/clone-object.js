describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    //Get all keys from object
    var keyarrs = Object.keys(expected);

    //iterate keys and assign with value to blank object
    for (x=0; x<keyarrs.length; x++) {
        obj[keyarrs[x]] = expected[keyarrs[x]];
    }

    //check equality
    // console.log(JSON.parse(JSON.stringify(obj)));
    // console.log(JSON.parse(JSON.stringify(expected)));

    // obj is equal to expected
    expect(obj).toEqual(expected);
    // object is not expected
    expect(obj).not.toBe(expected);
  });
});