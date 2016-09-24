var assert  = require('assert');
var Store   = require('../store.js');
var Record  = require('../record.js');
var Collector = require('../collector.js');

var store1 = new Store("Recordz", "London");
var collector1 = new Collector("James");
var record1 = new Record("Queen", "Greatest Hits", 3.00);
var record2 = new Record("Abba", "Greatest Hits", 2.00);

describe ( 'Collector', function() {

  beforeEach( function() {
    collector1.records = []
  })

  it ('has records', function() {
    assert.strictEqual(0, collector1.records.length)
  })

  it ( 'can add record', function() {
    collector1.add(record2);
    assert.strictEqual(1, collector1.records.length)
  })

  it ( 'check has record', function() {
    collector1.add(record1);
    collector1.add(record2);
    collector1.find(record1);
    assert.strictEqual(true, collector1.find(record1));
  })

  it ( 'can remove record', function() {
    collector1.add(record1);
    collector1.add(record2);
    collector1.remove(record1);
    assert.strictEqual(1, collector1.records.length);
  })



})