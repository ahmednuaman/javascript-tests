//QUESTION 1 | clone-object.js

    /* Cloning an object allows you to dublicate a variable, object, array etc. This function allows the clone to be equal to the original value, but not the same entity.  
    */

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

        //    {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']}

//QUESTION 2 | flatten-array.js

    /* The flat function creates a new array which removes any nested arrays or holes within an array.
        
    flat(depth) : The depth defines how deep the nested array structure should be opened up.
    */

        var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
        
    //depth is 3 nested arrays so:
        
        console.log(arr.flat(3));

        //  [1, 2, 1, 2, 3, 4, 5, 1, 2, 2]

//QUESTION 3 | scoping.js

    /*Scope defines the visibility of variables to functions:
        -Global scope means variables can be seen by all functions
        -Local scope mean certain variables are attributed to particular functions.
    */
    
    var mod = new Module(),
        request;

    request = function (callback) {
      return callback();
    };

    function Module () {
      this.foo = 'bar';
    }
    Module.prototype.method = function() {
      return this.foo;
    }

    Module.prototype.req = function() {
        return this.method(Module);
    };
    
        console.log(mod.req());

        // bar

    


