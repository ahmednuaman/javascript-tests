describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {

	var request = function (callback) {
		 return callback;
    };

    function Module () {
      this.foo = 'bar';
    }	

    Module.prototype.method = function() {
      return this.foo;
    };	
		
    Module.prototype.req = function() {
      return request(this.method());
    }; 
			
	var mod = new Module();

    expect(mod.req()).toBe('bar');
  });
});