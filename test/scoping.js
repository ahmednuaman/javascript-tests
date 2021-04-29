describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
        request;

    request = function (callback, scope) {
      return callback.call(scope);
    };

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      return request(this.method, this);
    };

    expect(mod.req()).toBe('bar');
  });
});