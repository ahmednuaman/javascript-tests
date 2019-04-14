describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
    let obj = {};

    //in this case I iterate all the properties of the original object and 
    //during the loop I am assigning each one to the new created object
    
     function iterationCopy(expected) {
	  let target = {};
		  for (let prop in src) {
		    if (src.hasOwnProperty(prop)) {
		      target[prop] = src[prop];
		    }
		  }
	  obj = target;
	 }

	 // Other solutions that are also working:

	 //obj = JSON.parse(JSON.stringify(expected));

    // obj2 = { ...expected };


    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
