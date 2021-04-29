describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    // impl start
    let flattenArray = [];

    // with definition being vague, I opted for non recursive solution, as most of js engines still lack tail optimisation
    let stack = [];
    stack.push(arr);

    while(stack.length > 0) {
        let currentElem = stack.shift();
        for(let i = 0; i < currentElem.length; i++) {
            if(Array.isArray(currentElem[i])) {
                stack.push(currentElem[i]);
            } else {
                flattenArray.push(currentElem[i])
            }
        }
    }

    arr = flattenArray.sort();

    // impl end

    expect(arr).toEqual(expected);
  });
});