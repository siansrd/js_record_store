var _ = require('lodash');

var Collector = function(name) {
  this.name     = name;
  this.records  = [];
  this.balance  = 0;
}

Collector.prototype = {
  add: function(record) {
    this.records.push(record);
  },
  find: function(searchedRecord) {
    var foundRecord = _.find(this.records, function(record){
      return record === searchedRecord;
    });
    if (typeof foundRecord != "undefined") {
       return true;
    }
  },
  remove: function(record) {
    if (this.find(record) === true) {
      var i = this.records.indexOf(record);
      i > -1 ? this.records.splice(i,1) : [];
    }
  }
}



module.exports = Collector;