describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
        
        const flattenArray = (arr) => {
          someNewArray = arr.reduce((acc, item)=>{
              if(Array.isArray(item)){
                  acc = acc.concat(flattenArray(item))
              }
              else{
                  acc = [...acc, item]
              }
              return acc
          },[])
          return someNewArray.sort()
      }
      
    arr = flattenArray(arr)
    expect(arr).toEqual(expected);
  });
});