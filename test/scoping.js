describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
        request;

    request = function (callback) {
      return callback();
    };

    // impl start
    var self

    function Module () {
      // keeping .this in self variable to avoid scoping issues
      // ultimate test would be to extract Module def into separate file, index.js for example if working with node.js
      // then, add req prototype in the test file
      self = this;
      self.foo = 'bar';
    }

    Module.prototype.method = function() {
      return self.foo;
    };

    // impl end

    Module.prototype.req = function() {
      return request(this.method);
    };

    expect(mod.req()).toBe('bar');
  });
});