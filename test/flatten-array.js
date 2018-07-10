describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    if (Array.isArray(arr)) {
      const stringArray = JSON.stringify(arr);
      const regex = new RegExp(/\[|\]/g);
      arr = JSON.parse('[' + stringArray.replace(regex, '') + ']').sort();
    }

    expect(arr).toEqual(expected);
  });
});