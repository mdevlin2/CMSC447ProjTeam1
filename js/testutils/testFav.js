QUnit.test("test: creating a favorite entry and making a new location object", function(assert){
  var houseResp = testHouseResp
  var houses = JSON.parse(houseResp)
  var house = houses.data[0]
  var entry = createFavoriteEntry(house, 0)
  var loc = makeNewLocation(house)
  assert.ok(entry != null, "favorite entry is not null")
  assert.ok(loc != null, "location is not null")
})
