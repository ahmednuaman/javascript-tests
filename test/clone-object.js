
describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']};
    
    // This can be simplified if:
    //
    // 1. Perf is not important and you don't  JSON.parse(JSON.stringify());
    //
    // 2. Deep clone is not needed if you don't care about mutations
    //    to obj.skills array changing expected.skills so that function
    //    could be simplified.
    //
    // 3. In an es6 environement you could use Object.assign or
    //    object rest spread for shallow copy and use those to
    //    simplify the deep clone function.
    //
    function recursiveDeepCopy(o) {
      var newO,
        i;
    
      if (typeof o !== 'object') {
        return o;
      }
      if (!o) {
        return o;
      }
    
      if ('[object Array]' === Object.prototype.toString.apply(o)) {
        newO = [];
        for (i = 0; i < o.length; i += 1) {
          newO[i] = recursiveDeepCopy(o[i]);
        }
        return newO;
      }
    
      newO = {};
      for (i in o) {
        if (o.hasOwnProperty(i)) {
          newO[i] = recursiveDeepCopy(o[i]);
        }
      }
      return newO;
    }
    
    var obj = recursiveDeepCopy(expected);

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
