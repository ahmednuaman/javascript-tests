describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
    request;

    request = function (callback) {
      // Changed the execution context through apply function, though it can be done with several other ways
      return callback.apply(mod);
    };

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      return request(this.method);
    };

    expect(mod.req()).toBe('bar');
  });
});
