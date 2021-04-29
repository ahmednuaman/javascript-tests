describe("scoping", function() {
  it("should correctly deal with scoping `this` back to the callee", function() {
    var mod = new Module(),
      request;

    request = function(callback) {
      return callback();
    };

    function Module() {
      this.foo = "bar";
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    //this scoping method is used also in React
    //this.method = this.method.bind(this);
    Module.prototype.req = function() {
      return request(this.method.bind(this));
    };

    expect(mod.req()).toBe("bar");
  });
});
