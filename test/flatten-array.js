describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
      expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // a bit of a hard coded solution
    // arr = arr.flat(3).sort()

    // better solution if you don't know how deeply
    // nested the arrays are
    const flatten = (arr) => {
      const nested = [...arr]
      const flat = []

      while (nested.length) {
        let current = nested.pop()

        if (Array.isArray(current)) {
          nested.push(...current)
        } else {
          flat.push(current)
        }
      }

      return flat.sort()
    }

    expect(flatten(arr)).toEqual(expected);
  });
});