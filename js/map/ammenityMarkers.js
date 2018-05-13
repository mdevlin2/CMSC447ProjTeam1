

function getSearchRadius(){
  var searchRadius = document.getElementById("searchRadius")
  return searchRadius.value
}

function getTermsList(){
  var restaurants = document.getElementById("restaurantsChk")
  var gyms = document.getElementById("gymChk")
  var bikes = document.getElementById("bikeChk")
  var pools = document.getElementById("poolChk")
  // loading.style.display = "inline-block"
  var chksArr = [restaurants, gyms, bikes, pools]
  var termList = []
  // Find out which check boxes are checked
  for (index in chksArr){
    if (chksArr[index].checked){
      termList.push(chksArr[index].value)
    }
  }

  return termList
}

function getTermsString(termsList){
  var terms = ""
  for (index in termsList){
    terms = terms + termsList[index] + ","
  }

  return terms
}

function getAmmenities(){
  var termList = getTermsList()
  var terms = getTermsString(termList)
  // trim the last comma
  if (terms != ""){
    terms = terms.substring(0, terms.length-1)
  } else {
    loadingOff()
    return
  }


  var lat = mymap.getCenter().lat
  var long = mymap.getCenter().lng
  var radius = getSearchRadius()
  var url = getAmmenitiesRoute(lat, long, radius, terms)
  var req = new XMLHttpRequest()

  req.open("GET", url)
  req.setRequestHeader("content-type", "application/x-www-form-urlencoded")
  req.onreadystatechange = function(){
    if (requestReady(req)){
      var resp = JSON.parse(req.responseText)
      var ammenityList = resp.data
      newAmmenityMarkers(ammenityList, termList)
      loadingOff()
    }
  }
  req.send()

}

function createAmenityMarker(amenity, term){
  var lat = amenity.lat
  var long = amenity.long
  var newMarker = new L.Marker(L.latLng(lat, long))
  newMarker.bindPopup("<h2>"+amenity.name+"</h2>"+ "<div class=\"popup\">" +
  "<img src=" + amenity.image + " class=\"popupImage\" >" + "<br>" +
  "Phone: " + amenity.phone + "</div>")
  newMarker.setIcon(markerIcons[term])

  return newMarker
}

// Creates new ammenity markers
function newAmmenityMarkers(amenities, terms){
  ammenityLayer.clearLayers()
  if (Object.keys(amenities).length == 0){
    console.log("no results")
    return
  }

  for (t_index in terms){
    var term = terms[t_index]
    var amenityList = amenities[term]
    for (index in amenityList){
      var amenity = amenityList[index]
      var newMarker = createAmenityMarker(amenity, term)
      ammenityLayer.addLayer(newMarker)
    }
  }
}
