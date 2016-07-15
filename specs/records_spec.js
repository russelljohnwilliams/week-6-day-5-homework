_ = require ('lodash')
var Record = require('../records');
var assert = require('chai').assert;


describe( "Records", function() {

  beforeEach( function() {

    // surfaceNoise = new RecordShop("Surface Noise", "Newcastle");

    loveless = new Record("Loveless", "My Bloody Valentine", 9.99);
    crooked = new Record("Crooked Rain, Crooked Rain", "Pavement", 7.99);
    theWayItIs = new Record("The Way It Is", "Bruce Hornsby and the Range", 4.99);
    vivaHate = new Record("Viva Hate", "Morrissey", 5.99);
    tanglewoodNumbers = new Record("Tanglewood Numbers", "Silver Jews", 11.99);
  })

  it ("record has a title", function(){
    assert.equal("Tanglewood Numbers", tanglewoodNumbers.title)
  })

  it ("record has an artist", function(){
    assert.equal("Morrissey", vivaHate.artist)
  })

  it ("record has a price", function(){
    assert.equal(4.99, theWayItIs.price)
  })





})