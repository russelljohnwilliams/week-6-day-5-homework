_ = require ('lodash')
var Record = require('../records');
var RecordShop = require('../record_shop');
var assert = require('chai').assert;


describe( "RecordShop", function() {

  beforeEach( function() {

    surfaceNoise = new RecordShop("Surface Noise", "Newcastle");

    loveless = new Record("Loveless", "My Bloody Valentine", 9.99);
    crooked = new Record("Crooked Rain, Crooked Rain", "Pavement", 7.99);
    theWayItIs = new Record("The Way It Is", "Bruce Hornsby and the Range", 4.99);
    vivaHate = new Record("Viva Hate", "Morrissey", 5.99);
    tanglewoodNumbers = new Record("Tanglewood Numbers", "Silver Jews", 11.99);

  })

  it ("record shop has a title", function(){
    assert.equal("Surface Noise", surfaceNoise.name)
  })

  it ("record shop has a location", function(){
    assert.equal("Newcastle", surfaceNoise.location)
  })

  it ("record shop has NO stock", function(){
    assert.equal(0, surfaceNoise.stock.length)
  })

  it ("book record in to stock", function() {
    surfaceNoise.addRecord(loveless);
    surfaceNoise.addRecord(vivaHate);
    assert.equal(2, surfaceNoise.stock.length)
  })

  it ("lists all the stock in inventory", function(){
    surfaceNoise.addRecord(loveless);
    surfaceNoise.addRecord(theWayItIs);
    surfaceNoise.addRecord(crooked);
    surfaceNoise.addRecord(vivaHate);  
    assert.deepEqual([theWayItIs, vivaHate, loveless, crooked], surfaceNoise.listInventory())
  })

  it ("Removed a copy of loveless", function(){
    surfaceNoise.addRecord(loveless);
    surfaceNoise.addRecord(theWayItIs);
    surfaceNoise.addRecord(crooked);
    surfaceNoise.addRecord(vivaHate);
    surfaceNoise.soldRecord(loveless);
    assert.equal(3, surfaceNoise.stock.length)
  })

  it ("added the value of removed item to till", function(){
    surfaceNoise.addRecord(loveless);
    surfaceNoise.addRecord(theWayItIs);
    surfaceNoise.addRecord(crooked);
    surfaceNoise.addRecord(vivaHate);
    surfaceNoise.soldRecord(loveless);
    assert.equal(9.99, surfaceNoise.till)
  })


  // it ("lists title, artist, price of inventory items", function(){
  //   surfaceNoise.addRecord(loveless)
  //   assert.equal([loveless], surfaceNoise.listInventory2())
  // })


})


  // { 'Loveless': 'My Bloody Valentine': 9.99 }