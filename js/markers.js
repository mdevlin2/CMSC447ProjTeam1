class PropertyMarker {
  constructor(price, lat, long, numBaths, numBeds){
    this.price = price
    this.lat = lat
    this.long = long
    this.numBaths = numBaths
    this.numBeds = numBeds
  }
}


function newMarkers(houses) {
  console.log("making markers")
  markerLayer.clearLayers()
  for (index in houses){
    house = houses[index]
    var newMarker = L.marker(L.latLng(house.lat, house.long))
    // TODO: bind a pop up to every markers

    console.log("adding" + house)
    // adding this marker to array which will be added to the new layer
    markerLayer.addLayer(newMarker)
  }
}

function createHouseEntry(house){
  var item = document.createElement("tr")
  var address = document.createElement("td")
  var addressButton = document.createElement("button")
  var price = document.createElement("td")
  var nBathrooms = document.createElement("td")
  var nBeds = document.createElement("td")
  var saveButton = document.createElement("button")
  var slider = document.getElementById("searchRadius")
  addressButton.innerHTML = house.address
  addressButton.className = "addressButton"
  addressButton.onclick = function(){
    var coors = L.latLng(house.lat, house.long)
    mymap.setView(coors, slider.value)
  }
  saveButton.innerHTML="Save"
  saveButton.style.class = "saveButton"
  saveButton.onclick = function(){
    var arrJson = localStorage.getItem("savedHouses")
    if (arrJson == null){
      arrJson = '[]'
    }
    var houseArr = JSON.parse(arrJson)
    houseArr.push(house)
    var saveInfo = JSON.stringify(houseArr)
    console.log(saveInfo)
    localStorage.setItem("savedHouses", saveInfo)
  }

  address.appendChild(addressButton)
  var money = house.characteristics.price.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});
  price.innerHTML = "$" + money
  nBathrooms.innerHTML = house.characteristics.bathrooms
  nBeds.innerHTML = house.characteristics.bedrooms
  item.appendChild(address)
  item.appendChild(price)
  item.appendChild(nBathrooms)
  item.appendChild(nBeds)
  item.appendChild(saveButton)

  return item
}

function updateResults(houses){
  console.log("updating results")
  var list = document.getElementById("resultList")
  for (index in houses){
    house = houses[index]
    var entry = createHouseEntry(house)
    list.appendChild(entry)
  }
}
// get properties will make an http to the server to get a list of properties
function getProperties(lat, long){
  var url = getPropertyRoute(lat, long)
  var req = new XMLHttpRequest()
  console.log("getting from" + url)

  // Start http request
  req.open("GET", url)
  req.setRequestHeader("content-type", "application/x-www-form-urlencoded")

  // Wait for the http request to return
  req.onreadystatechange = function(){
    // Check if we got a response yet
    if (requestReady(req)){

      // Array of houses
      var resp = JSON.parse(req.responseText)
      var houses = resp.data

      console.log("Should be getting markers")

      // resp.data contains all the house data
      // Filter the houses
      houses = filterProperty(houses)

      // Places the markers on the map
      newMarkers(houses)

      // Updates the result table
      updateResults(houses)

    }
  }
  req.send()
}

window.onload = function(){
  console.log("loaded")
  var slider = document.getElementById("searchRadius");
  var radius = document.getElementById("radius");
  slider.oninput = function(){
    radius.innerHTML = slider.value
  }
  var selectLat = parseFloat(localStorage.getItem("selectedLat"))
  var selectLong = parseFloat(localStorage.getItem("selectedLong"))

  var place = L.latLng(selectLat, selectLong)
  mymap.setView(place, 30)
  getProperties(selectLat, selectLong)
}
