var RecordShop = function(name, location, till) {
  this.name = name;
  this.location = location;
  this.stock = [];
  this.till = till;
}

RecordShop.prototype = {
  
  addRecord: function(record){
    this.stock.push(record);
  },

  listInventory: function(){
    var inventory = _.sortBy(this.stock, ['artist']);
    return inventory
    console.log(inventory)
  }
}

module.exports = RecordShop;