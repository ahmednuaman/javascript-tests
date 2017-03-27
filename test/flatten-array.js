
describe('flatten array', function () {
  it('should flatten an array', function () {

  	function flatten(arr) {
  return arr.reduce(function(explored, toExplore) {
    return explored.concat(
      Array.isArray(toExplore)
        ? flatten(toExplore)
        : toExplore
    );
  }, []);
}

    	var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
		var flat = flatten(arr);
		flat.sort();

    expect(expected).toEqual(flat);
  });
});