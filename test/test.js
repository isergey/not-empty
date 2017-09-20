var notEmpty = require('../dist/not-empty').default;
var expect = require('chai').expect;

describe('notEmpty', function () {
  it('expect(notEmpty([])).to.be.false', function () {
    expect(notEmpty([])).to.be.false;
  });

  it('expect(notEmpty({})).to.be.false', function () {
    expect(notEmpty({})).to.be.false;
  });

  it('expect(notEmpty([])).to.be.false', function () {
    expect(notEmpty([])).to.be.false;
  });

  it('expect(notEmpty(\'\')).to.be.false', function () {
    expect(notEmpty('')).to.be.false;
  });

  it('expect(notEmpty(0)).to.be.false;', function () {
    expect(notEmpty(0)).to.be.false;
  });

  it('expect(notEmpty(foo)).to.be.true;', function () {
    function Foo() { }
    var foo = new Foo();
    expect(notEmpty(foo)).to.be.true;
  });

  it('expect(notEmpty(undefined | null | NaN)).to.be.false;', function () {
    expect(notEmpty(undefined)).to.be.false;
    expect(notEmpty(null)).to.be.false;
    expect(notEmpty(NaN)).to.be.false;
  });

  describe('Set', function () {
    var set = new Set();

    it('empty Set expect(notEmpty(set)).to.be.false', function () {
      expect(notEmpty(set)).to.be.false;
    });

    it('not empty Set expect(notEmpty(set)).to.be.true', function () {
      set.add(1);
      expect(notEmpty(set)).to.be.true;
    });
  });

  describe('Map', function () {
    var map = new Map();

    it('empty Map expect(notEmpty(map)).to.be.false', function () {
      expect(notEmpty(map)).to.be.false;
    });

    it('not empty Map expect(notEmpty(map)).to.be.true', function () {
      map.set(1, 1);
      expect(notEmpty(map)).to.be.true;
    });
  });


  it('expect(notEmpty(new Error())).to.be.true', function () {
    expect(notEmpty(new Error())).to.be.true;
  });

  it('expect(notEmpty(true)).to.be.true', function () {
    expect(notEmpty(true)).to.be.true;
  });

  it('expect(notEmpty(false)).to.be.false', function () {
    expect(notEmpty(false)).to.be.false;
  });

  it('expect(notEmpty([1, 2])).to.be.true;', function () {
    expect(notEmpty([1, 2])).to.be.true;
  });

  it('expect(notEmpty({ 1: 2 })).to.be.true', function () {
    expect(notEmpty({ 1: 2 })).to.be.true;
  });

  it('expect(notEmpty(\'string\')).to.be.true', function () {
    expect(notEmpty({ 1: 2 })).to.be.true;
  });

  it('expect(notEmpty(20)).to.be.true', function () {
    expect(notEmpty(20)).to.be.true;
  });

  it('expect(notEmpty(-20)).to.be.true', function () {
    expect(notEmpty(-20)).to.be.true;
  });

  it('expect(notEmpty(0.1)).to.be.true', function () {
    expect(notEmpty(0.1)).to.be.true;
  });

  it('expect(notEmpty(-0.1)).to.be.true', function () {
    expect(notEmpty(-0.1)).to.be.true;
  });

});
