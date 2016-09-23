var _ = require('lodash');

var Store = function(name, city) {
  this.name    = name;
  this.city    = city;
  this.balance = 0;
  this.records = [];
}

Store.prototype = {
  canAffordRecord: function(record){
    return this.balance >= record.price ? true : false;
  },
  buy: function(record, collector){
    if (this.canAffordRecord(record) === true) {
      this.balance -= record.price;
      collector.balance += record.price;
      this.records.push(record);
    } 
  }
}

module.exports = Store;