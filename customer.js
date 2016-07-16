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
    this.shoppingBag.push(record);
    this.wallet -= (_.toNumber(record.price));
    shop.till += (_.toNumber(record.price));
    var soldItem = _.findIndex(shop.stock, record);
    _.pullAt(shop.stock, [soldItem]);
  },

  sellRecord: function(record, shop){
    var soldItem = _.findIndex(this.shoppingBag, record);
    var pulled = _.pullAt(this.shoppingBag, [soldItem]);
    var price = _.map(pulled, 'price');
    this.wallet += (_.toNumber(price));
    console.log(shop.till)
    shop.till -= (_.toNumber(price));
    
  }



}


module.exports = Customer;



// pass in record as argument
// take record from shop
// find out how much it costs
// remove that cost from wallet
// add it to shopping bag   


// console.log(callback);
// console.log(price);


