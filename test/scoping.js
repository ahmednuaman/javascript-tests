describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
        request;

    request = function (callback) {
      return callback();          // Solution #1
      return callback.call(mod);  // Solution #2
    };

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      return request(() => this.method());  // Solution #1
      return request(this.method);          // Solution #2
    };

    expect(mod.req()).toBe('bar');
  });
});