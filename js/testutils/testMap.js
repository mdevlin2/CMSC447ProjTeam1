QUnit.test("test: new roperty marker", function(assert){
  var houseResp = testHouseResp
  var house = JSON.parse(houseResp)
  console.log(house);
  var newMarker = newPropertyMarker(house.data[0])
  assert.ok( newMarker != null, "property marker test passed")
})

QUnit.test("test: creating a table entry", function(assert){
  var houseResp = testHouseResp
  var house = JSON.parse(houseResp)
  var item = createHouseEntry(house.data[0], false)
  asser.ok(item != null, "property result table entry test passed")
})

QUnit.test("test: creating an amenity marker", function(assert){
  var amenityResp = testAmenityData
  var ammenities = JSON.parse(amenityResp)
  var newMarker = createAmenityMarker(amenities.data[0], "gym")
  assert.ok(newMarker != null, "creating an amenity marker passed")
})
