module.exports = function () {
  return function (View) {
    View.prototype.add = function (attr, n) {
      this.set(attr, this.get(attr) + n);
      return this;
    };
    View.prototype.minus = function (attr, n) {
      this.add(attr, -n);
      return this;
    };
    View.prototype.toggle = function (attr, bool) {
      if(arguments.length === 2) {
        this.set(attr, bool);
      }
      else {
        this.set(attr, !this.get(attr));
      }
      return this;
    };
  };
};