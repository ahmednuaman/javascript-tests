describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
      expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    arr = flatten(arr);

    function flatten(array) {
      return array
        .reduce(
          (acc, value) => {
            return (acc.concat(
              typeof value === 'number' ?
                value : flatten(value)
            ));
          }, []
        )
        .sort();
    }

    expect(arr).toEqual(expected);
  });
});