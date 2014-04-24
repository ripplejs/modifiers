var ripple = require('ripple');
var modifiers = require('modifiers');
var assert = require('assert');

describe('modifiers', function () {

  beforeEach(function () {
    var View = ripple('<div></div>');
    View.use(modifiers());
    this.view = new View();
  });

  describe('increasing and decreasing numbers', function () {

    beforeEach(function () {
      this.view.set('n', 0);
    });

    it('should add a value', function () {
      this.view
        .add('n', 1)
        .add('n', 1);
      assert(this.view.get('n') === 2);
    });

    it('should minus a value', function () {
      this.view
        .minus('n', 1)
        .minus('n', 1);
      assert(this.view.get('n') === -2);
    });

  });

  describe('toggling values', function () {

    beforeEach(function () {
      this.view.set('checked', false);
    });

    it('should toggle', function () {
      this.view.toggle('checked');
      assert(this.view.get('checked') === true);
    });

    it('should toggle back', function () {
      this.view
        .toggle('checked')
        .toggle('checked');
      assert(this.view.get('checked') === false);
    });

    it('should toggle based on an expression', function () {
      this.view.toggle('checked', 2 < 1);
      assert(this.view.get('checked') === false);
      this.view.toggle('checked', 2 > 1);
      assert(this.view.get('checked') === true);
    });

  });



});