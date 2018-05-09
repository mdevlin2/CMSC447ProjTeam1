var globalHouses;
var resultBedrooms = -1;
var resultBathrooms = -1;
var resultMin = "";
var resultMax = "";
var resultSlider = -1;

var markerIcons = {
  "restaurant": L.icon({iconUrl: "images/restaurant.png"}),
  "gym": L.icon({iconUrl: "images/gym.png"}),
  "pool": L.icon({iconUrl: "images/pool.png"}),
  "bike_paths": L.icon({iconUrl: "images/bike.png"})
}

function clearMarkers(){
  var list = document.getElementById("resultList")
  var savedJson = localStorage.getItem("savedHouses")
  var houses = JSON.parse(savedJson)
  markerLayer.clearLayers()
  list.innerHTML = defaultResultTable
  for (index in houses){
    var house = houses[index]
    var marker = newPropertyMarker(house)
    markerLayer.addLayer(marker)
    updateResults(house, true)
  }

}

function loadingOn() {
  var loading = document.getElementById("loading")
	loading.style.display = "block"
  console.log("changing")
	return
}

function loadingOff(){
  var loading = document.getElementById("loading")
	loading.style.display = "none"
	return
}

function prepareEventHandlers() {
  var loading = document.getElementById("loading")

  var bedroomSection = document.getElementById("bedroom");
  bedroomSection.onchange = function() {
  resultBedrooms = bedroomSection.value;
  }
  var bathroomSection = document.getElementById("bathroom");
  bathroomSection.onchange = function() {
    resultBathrooms = bathroomSection.value;
  }
  var minPriceSection = document.getElementById("minPrices");
  minPriceSection.onchange = function() {
    resultMin = minPriceSection.value;
  }
  var maxPriceSection = document.getElementById("maxPrices");
  maxPriceSection.onchange = function() {
    resultMax = maxPriceSection.value;
  }
  var sliderSection = document.getElementById("searchRadius")
  sliderSection.onclick = function() {
    resultSlider = sliderSection.value;
  }
  var updateButton = document.getElementById("updateButton")
  updateButton.onclick = function() {
      loadingOn()
      loading.style.display = "block"
      var filteredHouses = [];
      for (var i = 0; i < globalHouses.length; i++){
        if(globalHouses[i].characteristics.bedrooms >= resultBedrooms || resultBedrooms ==-1){
          if(globalHouses[i].characteristics.bathrooms >= resultBathrooms || resultBathrooms ==-1){
            if(globalHouses[i].characteristics.price >= resultMin || resultMin == ""){
              if(globalHouses[i].characteristics.price <= resultMax || resultMax == ""){
                 filteredHouses.push(globalHouses[i]);
              }
            }
          }
        }
      }
      clearMarkers()
      for (index in filteredHouses){
         var marker = newPropertyMarker(filteredHouses[index]);
         markerLayer.addLayer(marker)
         updateResults(filteredHouses[index]);
       }
       getAmmenities();
      }
}


window.onload = function(){
  console.log("loaded")
  addHome();
  addMap();
  addFavorites();
  prepareEventHandlers();
  var slider = document.getElementById("searchRadius");
  var radius = document.getElementById("radius");
  var location = localStorage.getItem("location")
  if (location == null){
    return
  }
  location = JSON.parse(location)

  // var updateButton = document.getElementById("updateButton")
  slider.oninput = function(){
    radius.innerHTML = slider.value
  }


  var place = L.latLng(location.lat, location.long)
  mymap.setView(place, 30)
  getProperties(location)

}
