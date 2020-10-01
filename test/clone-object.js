describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};


    // JSON (deep clone)
    obj = JSON.parse(JSON.stringify(expected));


    /*
    // ---
    // ES6 (not compatible with build server w/ node 3.3.1)
    // ---
    // (shallow clone)
    obj = {...expected};
    Object.assign(obj, expected);

    // (deep clone w/ knowledge of nested array property)
    obj = {...expected, skills: [...expected.skills]};
    */


    // ES5 (shallow clone)
    function clone(source) {
      var result = {}, key1, key2;
      for(key1 in source) {
        if(typeof source[key1] !== 'object') {
          result[key1] = source[key1];
        } else {
          result[key1] = (source[key1] instanceof Array) ? [] : {};
          for(key2 in source[key1]) {
            result[key1][key2] = source[key1][key2];
          }
        }
      }
      return result;
    }
    obj = clone(expected);


    // Libraries (deep clone) (commented out so tests pass)
    /*
    obj = $.extend({}, expected); // jQuery
    obj = _.cloneDeep([{}, expected]); // Underscore
    */


    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});