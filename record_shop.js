var RecordShop = function(name, location, till) {
  this.name = name;
  this.location = location;
  this.stock = [];
  this.till = 0;
}

RecordShop.prototype = {
  
  addRecord: function(record){
    this.stock.push(record);
  },

  listInventory: function(){
    var inventory = _.sortBy(this.stock, ['artist']);
    return inventory  
  },

  soldRecord: function(title){
    var soldItem = _.findIndex(this.stock, title);
    var pulled = _.pullAt(this.stock, [soldItem]);
    var price = _.map(pulled, 'price');
    this.till += price
  },

  totalCash: function(){
    this.till = 0
    var total = _.sumBy(this.stock, 'price');
    this.till += total
  },





 
}

module.exports = RecordShop;

