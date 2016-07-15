_ = require ('lodash')
var Record = require('../records');
var RecordShop = require('../record_shop');
var assert = require('chai').assert;


describe( "RecordShop", function() {

  beforeEach( function() {

    surfaceNoise = new RecordShop("Surface Noise", "Newcastle");

  })

  it ("record shop has a title", function(){
    assert.equal("Surface Noise", surfaceNoise.name)
  })

  it ("record shop has a location", function(){
    assert.equal("Newcastle", surfaceNoise.location)
  })

})