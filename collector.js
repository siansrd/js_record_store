var _ = require('lodash');

var Collector = function(name) {
  this.name     = name;
  this.records  = [];
  this.balance  = 0;
}
module.exports = Collector;