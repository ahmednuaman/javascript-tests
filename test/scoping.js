describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
 
    var request = function (callback) {
      return callback();
    };

    function Module() {

      var that = this;

      this.foo = 'bar';

      this.method = function () {
        return that.foo;
      };

      this.req = function () {
        return request(this.method);
      };
    }
    var mod = new Module();

    expect(mod.req()).toBe('bar');
  });
});
