
var Customer  = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.shoppingBag = [];
} 

Customer.prototype = {

  addRecord: function(record){
    this.shoppingBag.push(record);
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
// console.log(record);
// console.log(pulled);



//  buyRecord: function(record, callback){
//   callback(record);
//   this.wallet -= (_.toNumber(price));
//   this.shoppingBag.push(pulled);
// }