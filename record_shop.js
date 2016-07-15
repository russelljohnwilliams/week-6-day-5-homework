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

  removeRecord: function(title){
    var array = _.findIndex(this.stock, title);
    var pulled = _.pullAt(this.stock, [array]);
  }



 
}

module.exports = RecordShop;






// var inventory = _.remove(array, ['title'];
// return inventory




// listInventory2: function(){
//   var inventory = _.sortBy(this.stock, ['artist']);
//   var inventory2 = _.map(inventory,'title', 'artist', 'price');
//   console.log(inventory2)
//   return inventory2
// }