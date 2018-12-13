describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
    arr = new ArrayHelper().flattenArray(arr);
    var expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    expect(arr).toEqual(expected);
  });
});




var ArrayHelper = /** @class */ (function () {
 

  function ArrayHelper () {}

  
  ArrayHelper.prototype.determineLevels = function (arr = null) {
    let result = 1;
    result = this.mapForInnerArrays(arr, result);
    return result;
  }
  
  ArrayHelper.prototype.mapForInnerArrays = function (arr = null, result = null) {
    arr.map(el => {
      if (Array.isArray(el)) {
        result++;
        result = this.mapForInnerArrays(el, result);
      }
    });
    return result;
  }

  ArrayHelper.prototype.flattenArray = function (toFlatten = null) {
    let result = [];
    if (Array.isArray(toFlatten)) {
      let levels = this.determineLevels(toFlatten);
      toFlatten = toFlatten.flat(levels);
      result = toFlatten.sort();
    }
    return result;
  }
  

  return ArrayHelper;

})()


