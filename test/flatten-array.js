describe("flatten array", function() {
  it("should flatten an array", function() {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
      expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    let flattenSortArray = array => array.reduce(
      (a, b) => Array.isArray(b) ? a.concat(flattenSortArray(b)) : a.concat(b), []
    ).sort((a, b) => a - b);

    expect(flattenSortArray(arr)).toEqual(expected);
  });
});
