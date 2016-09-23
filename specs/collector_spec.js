var assert  = require('assert');
var Store   = require('../store.js');
var Record  = require('../record.js');
var Collector = require('../collector.js');

describe ( 'Collector', function() {

  it ('has records', function() {
    collector1 = new Collector("James")
    assert.strictEqual(0, collector1.records.length)
  })

})