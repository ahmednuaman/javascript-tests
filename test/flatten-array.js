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

  
  ArrayHelper.prototype.determineLevels = function (arr) {
    var result = 1;
    result = this.mapForInnerArrays(arr, result);
    return result;
  }
  
  ArrayHelper.prototype.mapForInnerArrays = function (arr, result) {


    /*
    THIS WAS THE ES6 WAY (PahntomJS does not support ES6)
    arr.map(el => {
      if (Array.isArray(el)) {
        result++;
        result = this.mapForInnerArrays(el, result);
      }
    });*/

    this.reduce(arr);


    return result;
  }

  ArrayHelper.prototype.reduce = function (arr) {
    var self = this;
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat((Array.isArray(toFlatten)) ? self.reduce(toFlatten) : toFlatten);
    }, []);
  }

  ArrayHelper.prototype.flattenArray = function (toFlatten) {
    var result = [];
    if (Array.isArray(toFlatten)) {
      result = this.reduce(toFlatten).sort();
    }
    return result;
  }
  

  return ArrayHelper;

})()


