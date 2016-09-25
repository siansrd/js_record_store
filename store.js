var _ = require('lodash');

var Store = function(name, city) {
  this.name    = name;
  this.city    = city;
  this.balance = 0;
  this.records = [];
}

Store.prototype = {
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
  },
  canAffordRecord: function(record){
    return this.balance >= record.price ? true : false;
  },
  buy: function(record, collector){
    if (this.canAffordRecord(record) && collector.find(record) === true) {
      this.balance -= record.price;
      collector.balance += record.price;
      this.records.push(record);
      collector.remove(record);
    } 
  },
  sortByArtist: function(records) {
    return _.sortBy(records, ['artist', 'title']);
  },
  inventory: function(records){
    var sorted = this.sortByArtist(records);
    return sorted.map(function(record){
      return ", Artist: " + record.artist.toString() + ", Title: " + record.title.toString() + ", Price: " + record.price.toString();
    });
  },
  stockValue: function(){
    return _.reduce(this.records, function(acc, record) { 
        return acc + record.price; 
      }, 0);
  },
  totalValue: function() {
    var stock = this.stockValue();
    return stock + this.balance;
  }

}

module.exports = Store;