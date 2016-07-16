_ = require ('lodash')
var Customer = require('../customer')
var Record = require('../records');
var RecordShop = require('../record_shop');
var assert = require('chai').assert;

describe( "Customer", function(){

  beforeEach( function(){

    bob = new Customer("Bob", 150);

    surfaceNoise = new RecordShop("Surface Noise", "Newcastle");

    loveless = new Record("Loveless", "My Bloody Valentine", 9.99);

  })

  it("customer has a name", function(){
    assert.equal("Bob", bob.name);
  })

  it("customer has cold hard cash", function(){
    assert.equal(150, bob.wallet);
  })

  it("customer has empty shopping bag", function(){
    assert.equal(0, bob.shoppingBag.length)
  })

  it("customer has a record in shopping bag", function(){
    bob.addRecord(loveless);
    assert.equal(1, bob.shoppingBag.length)

    it ("customer puts a record in shopping bag", function(){
      surfaceNoise.addRecord(loveless);
      bob.buyRecord(loveless, surfaceNoise.soldRecord;
      assert.equal(1, bob.shoppingBag.length)
    })
      
  })

  // it ("customer sells a record")

 






})


