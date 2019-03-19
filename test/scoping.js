describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
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
    };

    Module.prototype.req = function() {
      // generally I avoid using 'this' when coding nowadays but
      // binding the method here seems like the best solution
      // to me
      return request(this.method.bind(this));
    };

    expect(mod.req()).toBe('bar');
  });
});
