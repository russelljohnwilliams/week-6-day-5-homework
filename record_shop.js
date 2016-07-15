var RecordShop = function(name, location, till) {
  this.name = name;
  this.location = location;
  this.stock = [];
  this.till = till;
}

RecordShop.prototype = {
  addRecord: function(record){
    this.stock.push(record);
  }
}

module.exports = RecordShop;