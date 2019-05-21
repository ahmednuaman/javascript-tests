describe('clone object', function () {
  it('should clone an object', function () {

    // Arrange
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
    obj = {};

    // Act
    obj = Object.assign(obj, expected);

    // Assert
    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  }); 
});
