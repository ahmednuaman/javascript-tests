describe("clone object", function() {
  it("should clone an object", function() {
    var expected = {
        name: "Ahmed",
        age: 27,
        skills: ["cycling", "walking", "eating"]
      },
      obj = {};

    //there is many solutions to do it, here is another one:
    obj = { ...expected };

    //2nd solution:
    // obj = Object.assign({}, expected);

    //3rd solution:
    // function clone(obj) {
    //   if (null == obj || "object" != typeof obj) return obj;
    //   var copy = obj.constructor();
    //   for (var attr in obj) {
    //     if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    //   }
    //   return copy;
    // }
    // obj = clone(expected);

    //4th solution:
    // obj = JSON.parse(JSON.stringify(expected));

    //5th solution:
    // function clone(obj) {
    //   //in case of premitives
    //   if (obj === null || typeof obj !== "object") {
    //     return obj;
    //   }
    //   //date objects should be
    //   if (obj instanceof Date) {
    //     return new Date(obj.getTime());
    //   }
    //   //handle Array
    //   if (Array.isArray(obj)) {
    //     var clonedArr = [];
    //     obj.forEach(function(element) {
    //       clonedArr.push(clone(element));
    //     });
    //     return clonedArr;
    //   }
    //   //lastly, handle objects
    //   let clonedObj = new obj.constructor();
    //   for (var prop in obj) {
    //     if (obj.hasOwnProperty(prop)) {
    //       clonedObj[prop] = clone(obj[prop]);
    //     }
    //   }
    //   return clonedObj;
    // }
    // obj = clone(expected);

    //6th solution:
    // function copy(o) {
    //   var output, v, key;
    //   output = Array.isArray(o) ? [] : {};
    //   for (key in o) {
    //     v = o[key];
    //     output[key] = typeof v === "object" ? copy(v) : v;
    //   }
    //   return output;
    // }
    // obj = copy(expected);

    //7th solution;
    // for (var prop in expected) {
    //   if (expected.hasOwnProperty(prop)) {
    //     // Push each value from `obj` into `extended`
    //     obj[prop] = expected[prop];
    //   }
    // }

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
