describe("clone object", function() {
  it("should clone an object", function() {
    var expected = {
        name: "Ahmed",
        age: 27,
        skills: ["cycling", "walking", "eating"]
      },
      obj = {};
    //returned object must be new object (can't mutate)
    //so there is a few possibilites, here is is one of them:
    //with Object.assign I take as 1st parametr empty object and
    //insert into that new object all values from 2nd parametr
    //if I would want to merge more than one object,
    //another parametr must be added

    obj = Object.assign({}, expected);

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
