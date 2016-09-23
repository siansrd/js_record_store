var assert  = require('assert');
var Store   = require('../store.js');
var Record  = require('../Record');
var Collector = require('../Collector');

describe ( 'Record', function() {

  it ('has a artist', function() {
    record1 = new Record('Mogwai', 'Come On Die Young', 1998);
    assert.strictEqual ('Mogwai', record1.artist );
  })



})