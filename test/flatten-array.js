describe("flatten array", function() {
  it("should flatten an array", function() {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
      expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    //on beggining I use spread operator to copy arr
    //as returned array must be a new array (array must not mutated)
    //in that copied array I use flat method to flatten array,
    //inside bracket, number is deep a nested array structure should be flattened.
    //then I use method sort to sort that array,
    //I don't have to use "function(a, b){return b - a}" as we have numbers from 1 to 9,
    //if we will have numbers 10 and over or -10 and less then we will have to
    //sorting method will take only first character from number and then sorting
    //and on the end assign NEW created array to arr variable

    arr = [...arr].flat(3).sort();

    expect(arr).toEqual(expected);
  });
});
