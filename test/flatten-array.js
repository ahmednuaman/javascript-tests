 describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
describe('flatten array', function ()
{
  it('should flatten an array', function () 
  {
    const arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

	newArr = arr.toString().split(',').sort().map(Number);

    expect(arr).toEqual(expected);
    expect(newArr).toEqual(expected);
  });
}); 
});