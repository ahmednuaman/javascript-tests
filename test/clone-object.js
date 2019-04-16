describe("clone object", function() {
  it("should clone an object", function() {
    var expected = {
        name: "Ahmed",
        age: 27,
        skills: ["cycling", "walking", "eating"]
      },
      obj = {};
    //Also a shallow copy for the expected obj will work using spread function or Object.assign, however, a deep copy woudld be in place
    //I will discuss few possible deep cloning ways
    //using JSON.parse(JSON.stringfy())
    // obj = JSON.parse(JSON.stringify(expected));
    //The issue with the previous method it won't copy insid methods of object

    //creating a function for the sake of deep copying each element in the obj
    function DeepCopier(object) {
      let copied = {};
      //looping inside the object element to copy them to the new object "copied"
      for (let i in object) {
        //First checking the object value is not an array, as with copying array would be converted to object
        if (Array.isArray(object[i])) {
          //simply copying if it is an array
          copied[i] = object[i].slice(0);
        }
        //Second making sure any nested element and methods will be looped inside to copy its value
        else if (object[i] != null && typeof object[i] == "object") {
          copied[i] = cloneObject(object[i]);
        } else {
          //finally returning everything to "copied"
          copied[i] = object[i];
        }
      }
      return copied;
    }
    obj = DeepCopier(expected);
    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
