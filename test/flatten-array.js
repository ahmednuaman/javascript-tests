describe("flatten array", function() {
  it("should flatten an array", function() {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
      expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    //using the flat method, with infinity to go the final depth of the array
    //using the sort method to sort the numbers ascendingly
    arr = arr.flat(Infinity).sort((a, b) => a - b);
    expect(arr).toEqual(expected);
  });
});
