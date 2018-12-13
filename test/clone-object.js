describe('clone object', function () {
  it('should clone an object', function () {

    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']}, 
    obj = new ObjectHelper().cloneObject(expected);

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});



var ObjectHelper = /** @class */ (function () {
 

  function ObjectHelper () {
    this._createPolyfill();
  }

  ObjectHelper.prototype.cloneObject = function (src = null) {
    let result = null;
    try {
      result = this._cloneObject(src);
    } catch (e) {
      result = this._cloneFromJSON(src);
    }
    return result;
  }

  ObjectHelper.prototype._cloneObject = function (src = null) {
    let result = null;
    if (src && typeof Object.assign === "function") {
      result = Object.assign({}, src);
    } else {
      throw new TypeError ("Unexpected input or Object Assign not available");
    }
    return result;
  }

  ObjectHelper.prototype._cloneFromJSON = function (src = null) {
    return (JSON.parse(JSON.stringify(src)));
  }

  ObjectHelper.prototype._createPolyfill = function (src = null) {
    /** Polyfill from MDN for <= ES5 */
    if (typeof Object.assign != 'function') {
      // Must be writable: true, enumerable: false, configurable: true
      Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) { // .length of function is 2
          'use strict';
          if (target == null) { // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
          }
    
          var to = Object(target);
    
          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];
    
            if (nextSource != null) { // Skip over if undefined or null
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        },
        writable: true,
        configurable: true
      });
    }
  }

  

  return ObjectHelper

})()