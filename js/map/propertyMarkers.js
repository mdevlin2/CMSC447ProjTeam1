


function newPropertyMarker(house, location) {
  var address = house.address;
  var bathrooms = house.characteristics.bathrooms;
  var bedrooms = house.characteristics.bedrooms;
  var price = house.characteristics.price;
  var population = house.characteristics.population
  var populationDenisty = house.characteristics.populationDenisty
  if (house.city == undefined){
    house.city = ""
  }
  var newMarker = new L.Marker(L.latLng(house.lat, house.long))
  newMarker.bindPopup("<h2><b>Property Information</b></h2>" + "<div class=\"popup\">"
  + "Address: " + address + "<br>" +"Number of bathrooms: "
  + bathrooms +"<br>" + "Number of bedrooms: " + bedrooms + "<br>" + "Price: " + price
  + "<br>" + "<h3>" + house.state + " " + house.county + " " + house.city +" Information </h2>"
  + "Population: " + population.toString() + "<br>" + "</div>")
   // + "Population Density: " + populationDenisty.toString() +  "</div>")

  // adding this marker to array which will be added to the new layer
  return newMarker
}


function placePropertyMarkers(resp, location){
  var houses = resp.data

  // Clears the table and markes
  clearMarkers()

  for (index in houses){
    var house = houses[index]
    house.state = location.state
    house.county = location.county

    var marker = newPropertyMarker(house)

    // Add the house marker to the layer
    markerLayer.addLayer(marker)

    // Updates the result table with this house instance
    updateResults(house, false)
  }
}


// get properties will make an http to the server to get a list of properties
function getProperties(location){
  var url = getPropertyRoute(location)
  var req = new XMLHttpRequest()

  // Start http request
  req.open("GET", url)
  req.setRequestHeader("content-type", "application/x-www-form-urlencoded")

  // Wait for the http request to return
  req.onreadystatechange = function(){
    // Check if we got a response yet
    if (requestReady(req)){
      var resp = JSON.parse(req.responseText)
      if (resp.err == 1){
        console.log("something bad happened")
        alert("Please go to Home and do a new search")
        return
      }
      globalHouses = resp.data;
      placePropertyMarkers(resp, location)
    }
  }
  req.send()
}
