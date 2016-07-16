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
    vivaHate = new Record("Viva Hate", "Morrissey", 5.99);


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
  })

  // ========= bob buyRecord =========

  it ("customer puts a record in shopping bag", function(){
    surfaceNoise.addRecord(loveless);
    surfaceNoise.addRecord(vivaHate);
    bob.buyRecord(loveless, surfaceNoise);
    assert.equal(1, bob.shoppingBag.length)
  })

  it ("customer removes money from wallet", function(){
    surfaceNoise.addRecord(loveless);
    surfaceNoise.addRecord(vivaHate);
    bob.buyRecord(loveless, surfaceNoise);
    assert.equal(140.01, bob.wallet)
  })

  it ("record shop sells a record", function(){
    surfaceNoise.addRecord(loveless);
    surfaceNoise.addRecord(vivaHate);
    bob.buyRecord(loveless, surfaceNoise);
    assert.equal(1, surfaceNoise.stock.length)
  })

  it("record shop till gets some money", function(){
    surfaceNoise.addRecord(loveless);
    surfaceNoise.addRecord(vivaHate);
    bob.buyRecord(loveless, surfaceNoise);
    assert.equal(9.99, surfaceNoise.till)
  })

// ========= bob sellRecord =========

  it ("customer hands over a record for sale", function(){
      bob.addRecord(loveless);
      bob.addRecord(vivaHate)
      bob.sellRecord(loveless, surfaceNoise);
      assert.equal(1, bob.shoppingBag.length)
  })

  it  ("customer gets paid for record", function(){
      bob.addRecord(loveless);
      bob.sellRecord(loveless, surfaceNoise);
      assert.equal(159.99, bob.wallet)
  })

  it ("record shop pays customer for record", function(){
      bob.addRecord(loveless);
      bob.sellRecord(loveless, surfaceNoise);
      assert.equal(-9.99, surfaceNoise.till)
  })

  it ("record shop adds record to stock", function(){
      surfaceNoise.addRecord(vivaHate);
      bob.addRecord(loveless);
      bob.sellRecord(loveless, surfaceNoise);
      assert.equal(2, surfaceNoise.stock.length)

  })


 })

