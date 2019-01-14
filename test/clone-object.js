describe('clone object', function () 
{
  it('should clone an object', function () 
  {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

	for( var field in expected )
	{
		if( expected.hasOwnProperty(field) )
		{
			obj[field] = expected[field];
		}
	}
		
    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
