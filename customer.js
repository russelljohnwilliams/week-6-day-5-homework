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

  buyRecord: function(record, callback){
    callback(record);
    this.wallet -= (_.toNumber(record.price));
    this.shoppingBag.push(record);
  }//.bind( this )
}

module.exports = Customer;



// pass in record as argument
// take record from shop
// find out how much it costs
// remove that cost from wallet
// add it to shopping bag   


// console.log(callback);
// console.log(price);


