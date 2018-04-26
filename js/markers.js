class PropertyMarker {
  constructor(price, lat, long, numBaths, numBeds){
    this.price = price
    this.lat = lat
    this.long = long
    this.numBaths = numBaths
    this.numBeds = numBeds
  }
}

var currentHouses = [];

console.log("inside markers")
function checkState(resp){
  return (resp.readyState == 4 && resp.status == 200);
}

function getPropertyRoute(lat, long){
  return "http://localhost:5000/properties?lat="+lat.toString()+"&long="+long.toString()+"&maxRadius=30"
}

function newMarkers(data) {
  console.log("making markers")
  markerLayer.clearLayers()
  for (index in data.data){
    house = data.data[index]
    var newMarker = L.marker(L.latLng(house.lat, house.long))
    console.log("adding" + house)
    // adding this marker to array which will be added to the new layer
    markerLayer.addLayer(newMarker)
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
      newMarkers(resp)
      currentHouses = resp.data
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
