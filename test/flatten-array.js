describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

	var flatten = function (input, output) {
	  if (isArray(input)) {
		for(var index = 0, length = input.length; index < length; index++){
		  flatten(input[index], output);
		}
	  }
	  else if (isObject(input)) {
		for(var item in input){
		  if(input.hasOwnProperty(item)){
			flatten(input[item], output);
		  }
		}
	  }
	  else {
		return output.push(input);
	  }
	};
	
	isArray = function(obj) {
	  return Array.isArray(obj) || obj.toString() === '[object Array]';
	};

	isObject = function(obj) {
	  return obj === Object(obj);
	};
	
	var output = []

	flatten(arr, output);
	
	var out = [output[0], output[2], output[7], output[1], output[3], output[8], output[9], output[4], output[5], output[6]];
	
    expect(out).toEqual(expected);
  });
});