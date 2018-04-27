class PropertyMarker {
  constructor(price, lat, long, numBaths, numBeds){
    this.price = price
    this.lat = lat
    this.long = long
    this.numBaths = numBaths
    this.numBeds = numBeds
  }
}


console.log("inside markers")
function checkState(resp){
  return (resp.readyState == 4 && resp.status == 200);
}

function getPropertyRoute(lat, long){
  var slider = document.getElementById("searchRadius")
  return "http://localhost:5000/properties?lat="+lat.toString()+"&long="+long.toString()+"&maxRadius="+slider.value.toString()
}

function newMarkers(data) {
  console.log("making markers")
  markerLayer.clearLayers()
  for (index in data.data){
    house = data.data[index]
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
  var slider = document.getElementById("searchRadius")
  addressButton.innerHTML = house.address
  addressButton.className = "addressButton"
  addressButton.onclick = function(){
    var coors = L.latLng(house.lat, house.long)
    mymap.setView(coors, slider.value)
  }

  address.appendChild(addressButton)
  price.innerHTML = house.characteristics.price
  nBathrooms.innerHTML = house.characteristics.bathrooms
  nBeds.innerHTML = house.characteristics.bedrooms
  item.appendChild(address)
  item.appendChild(price)
  item.appendChild(nBathrooms)
  item.appendChild(nBeds)

  return item
}

function updateResults(data){
  console.log("updating results")
  var list = document.getElementById("resultList")
  for (index in data.data){
    house = data.data[index]
    var entry = createHouseEntry(house)
    list.appendChild(entry)
  }
}

function getProperties(lat, long){
  var url = getPropertyRoute(lat, long)
  var req = new XMLHttpRequest()
  console.log("getting from" + url)
  req.open("GET", url)
  req.setRequestHeader("content-type", "application/x-www-form-urlencoded")

  req.onreadystatechange = function(){
    console.log("state change")
    if (checkState(req)){
      var resp = JSON.parse(req.responseText)
      console.log("Should be getting markers")
      // Filter the houses
      houses = filterProperty(resp.data)

      // Makes the markers
      newMarkers(resp)
      // Updates the result table
      updateResults(resp)
      console.log("got some markers")
      console.log(resp)
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
  getProperties(umbc_lat, umbc_long)
}
