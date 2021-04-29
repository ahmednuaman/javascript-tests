describe('flatten array', function () {
  it('should flatten an array', function () {
    
    // Arrange
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
    expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // Act
    let flattenedArray = arr.flat(4);
    let sortedFlattenedArray = flattenedArray.sort();
    arr = sortedFlattenedArray;

    // Assert
    expect(arr).toEqual(expected);
  });
});