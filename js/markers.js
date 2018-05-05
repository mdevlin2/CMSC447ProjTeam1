
var markerIcons = {
  "restaurant": L.icon({iconUrl: "images/restaurant.png"}),
  "gym": L.icon({iconUrl: "images/gym.png"}),
  "pool": L.icon({iconUrl: "images/pool.png"}),
  "bike_paths": L.icon({iconUrl: "images/bike.png"})
}


function loadingOn(loading) {
	loading.style.display = "block;"
  console.log("changing")
	return
}

function loadingOff(loading){
	// loading.style.display = "none"
	return
}


function newPropertyMarker(houses) {
  console.log("making markers")
  markerLayer.clearLayers()
  for (index in houses){
    house = houses[index]
    var address = house.address;
    var bathrooms = house.characteristics.bathrooms;
    var bedrooms = house.characteristics.bedrooms;
    var price = house.characteristics.price;
    var newMarker = L.marker(L.latLng(house.lat, house.long))
    newMarker.bindPopup("<h2><b>Property Information</b></h2>" +"Address: " + address + "<br>" +"Number of bathrooms: " + bathrooms +"<br>" + "Number of bedrooms: " +bedrooms + "<br>" + "Price: " + price)
    // TODO: bind a pop up to every markers

    console.log("adding" + house)
    // adding this marker to array which will be added to the new layer
    markerLayer.addLayer(newMarker)
  }
}

function newAmmenityMarkers(ammenities, terms){
  ammenityLayer.clearLayers()
  if (Object.keys(ammenities).length == 0){
    console.log("no results")
    return
  }

  for (t_index in terms){
    var term = terms[t_index]
    var ammenityList = ammenities[term]
    console.log(term)
    for (index in ammenityList){
      var ammenity = ammenityList[index]
      var lat = ammenity.lat
      var long = ammenity.long
      var newMarker = L.marker(L.latLng(lat, long))
      newMarker.bindPopup("<h2><b>"+ammenity.name+"</b></h2>")
      newMarker.setIcon(markerIcons[term])
      ammenityLayer.addLayer(newMarker)
    }
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
      newPropertyMarker(houses)

      // Updates the result table
      updateResults(houses)

    }
  }
  req.send()
}

function getAmmenities(){
  var restaurants = document.getElementById("restaurantsChk")
  var gyms = document.getElementById("gymChk")
  var bikes = document.getElementById("bikeChk")
  var pools = document.getElementById("poolChk")
  var searchRadius = document.getElementById("searchRadius")
  var loading = document.getElementById("loading")

  loading.style.display = "inline-block"
  var chksArr = [restaurants, gyms, bikes, pools]
  var terms=""
  var termList = []
  // Find out which check boxes are checked
  for (index in chksArr){
    if (chksArr[index].checked){
      terms=terms+chksArr[index].value+","
      termList.push(chksArr[index].value)
    }
  }

  // trim the last comma
  if (terms != ""){
    terms = terms.substring(0, terms.length-1)
  } else { return }
  console.log(terms)
  console.log("Finding some new ammenities")
  var lat = mymap.getCenter().lat
  var long = mymap.getCenter().lng
  var radius = searchRadius.value

  var url = getAmmenitiesRoute(lat, long, radius, terms)
  var req = new XMLHttpRequest()
  req.open("GET", url)
  req.setRequestHeader("content-type", "application/x-www-form-urlencoded")
  req.onreadystatechange = function(){
    if (requestReady(req)){
      console.log(req.responseText)
      var resp = JSON.parse(req.responseText)
      newAmmenityMarkers(resp.data, termList)
      loading.style.display = "none"
    }
  }
  req.send()

}

window.onload = function(){
  console.log("loaded")
  var slider = document.getElementById("searchRadius");
  var radius = document.getElementById("radius");
  var updateButton = document.getElementById("updateButton")
  slider.oninput = function(){
    radius.innerHTML = slider.value
  }
  var selectLat = parseFloat(localStorage.getItem("selectedLat"))
  var selectLong = parseFloat(localStorage.getItem("selectedLong"))

  var place = L.latLng(selectLat, selectLong)
  mymap.setView(place, 30)
  getProperties(selectLat, selectLong)

  updateButton.onclick = function(){
    console.log(loading)
    console.log("clicked")
    getAmmenities()
  }
}
