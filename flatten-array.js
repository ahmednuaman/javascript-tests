describe('flatten array', function () 
{
  it('should flatten an array', function () 
  {
	var finish = [];
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
		
	recurse(arr, finish);
	finish.sort();
	arr = finish;

    expect(arr).toEqual(expected);
  });
});

function recurse(array, finish)
{
	for( var i = 0; i < array.length; i++ )
	{
		if( Number.isInteger(array[i]) )
		{
			finish.push(array[i]);
		}
		else
		{
			recurse(array[i], finish);
		}
	}
}