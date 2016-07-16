var Record = require('./records');
var RecordShop = require('./record_shop')

var Customer  = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.shoppingBag = [];
} 

Customer.prototype = {

  addRecord: function(record){
    this.shoppingBag.push(record);
  },

  buyRecord: function(record, shop){
    // add record to shopping bag   
    this.shoppingBag.push(record);
    // remove that cost from wallet
    this.wallet -= (_.toNumber(record.price));
    // add price to shop till
    shop.till += (_.toNumber(record.price));
    //find item by index
    var soldItem = _.findIndex(shop.stock, record);
    // take record from shop by index
    _.pullAt(shop.stock, [soldItem]);
  },

  sellRecord: function(record, shop){
    var soldItem = _.findIndex(this.shoppingBag, record);
    var pulled = _.pullAt(this.shoppingBag, [soldItem]);
    shop.stock.push(record);
    var price = _.map(pulled, 'price');
    this.wallet += (_.toNumber(price));
    shop.till -= (_.toNumber(price));
  }

}


module.exports = Customer;





// console.log(callback);
// console.log(price);


