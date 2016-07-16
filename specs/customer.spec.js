_ = require ('lodash')
var Customer = require('../customer')
var Record = require('../records');
var RecordShop = require('../record_shop');
var assert = require('chai').assert;


describe( "Customer", function() {

  beforeEach( function() {

    bob = new Customer("Bob", 150);

    surfaceNoise = new RecordShop("Surface Noise", "Newcastle");

    loveless = new Record("Loveless", "My Bloody Valentine", 9.99);
    crooked = new Record("Crooked Rain, Crooked Rain", "Pavement", 7.99);
    theWayItIs = new Record("The Way It Is", "Bruce Hornsby and the Range", 4.99);
    vivaHate = new Record("Viva Hate", "Morrissey", 5.99);
    tanglewoodNumbers = new Record("Tanglewood Numbers", "Silver Jews", 11.99);

  })

  it ("customer has a name", function(){
    assert.equal("Bob", bob.name)
  })


})

