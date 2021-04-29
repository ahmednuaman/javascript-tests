    function iterationCopy(src) {
              let obj = {};
              for (let property in src) {
                if (src.hasOwnProperty(property)) {
                  obj[property] = src[property];
                }
              }
              return obj;
            }

        var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']};
        
        var obj = iterationCopy(expected);
        
        console.log(obj);
          
