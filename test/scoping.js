describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
   
    // Arrange
    var mod = new Module(), request;

    request = function (callback) {
      // Here 'this' no longer refers to the 'this' of the Module object
      return callback();
    };
    
    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      // Because request() isn't a prototype of Module, its 'this' becomes the window 'this'
      // Therefore I bind the 'this' of Module to its execution, otherwise the 'this' of Module is lost in that function
      return request(this.method.bind(this));
    };

    // Act
    let finalResult = mod.req();

    // Assert
    expect(finalResult).toBe('bar');
  });
});