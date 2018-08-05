describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});

var Ahmed = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']}

function cloneObj(obj) {
     var clone = {};
     for (var i in obj) {
          if(typeof(obj[i]) == "object" && obj[i] != null) {
               clone[i] = cloneObj(obj[i]);
          } else {
               clone[i] = obj[i];
          }
     }
     return clone;
}

cloneObj(Ahmed);
