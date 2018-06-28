describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
        request;

    request = function (callback) {
      return callback();
    };

    var self

    function Module () {
      // keeping .this in self variable to avoid scoping issues
      self = this;
      self.foo = 'bar';
    }

    Module.prototype.method = function() {
      return self.foo;
    };

    Module.prototype.req = function() {
      return request(this.method);
    };

    expect(mod.req()).toBe('bar');
  });
});