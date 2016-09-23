var assert = require('assert');
var Store   = require('../store.js');
var Record  = require('../Record');
var Collector = require('../Collector');

var store1 = new Store("Recordz", "London");
var collector1 = new Collector("James");
var record1 = new Record("Queen", "Greatest Hits", 3.00);

describe ( 'Store', function() {

  beforeEach(function() {
    store1.balance = 50;
    collector1.balance = 20;
  });

  it('has a balance', function() {
    assert.strictEqual(50, store1.balance);
  })

  it('check if can afford record', function() {
    assert.strictEqual(true, store1.canAffordRecord(record1));
  })

  it('can buy record', function() {
    store1.buy(record1, collector1);
    assert.strictEqual(1, store1.records.length);
    assert.strictEqual(47.00, store1.balance);
    assert.strictEqual(23.00, collector1.balance);
  })



})