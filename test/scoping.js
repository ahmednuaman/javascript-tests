describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
	  
	request = function (callback) {
      return callback();
    };

    function Module () {
      this.foo = 'bar';
    }
	var mod = new Module(),
        request;

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      return request(this.method);
    };
	
    expect(mod.method()).toBe('bar');
  });
});