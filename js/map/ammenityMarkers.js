

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

// Creates new ammenity markers
function newAmmenityMarkers(ammenities, terms){
  ammenityLayer.clearLayers()
  if (Object.keys(ammenities).length == 0){
    console.log("no results")
    return
  }

  for (t_index in terms){
    var term = terms[t_index]
    var ammenityList = ammenities[term]
    for (index in ammenityList){
      var ammenity = ammenityList[index]
      var lat = ammenity.lat
      var long = ammenity.long
      var newMarker = new L.Marker(L.latLng(lat, long))
      console.log(ammenity)
      newMarker.bindPopup("<h2>"+ammenity.name+"</h2>"+ "<div class=\"popup\">" +
      "<img src=" + ammenity.image + " class=\"popupImage\" >" + "<br>" +
      "Phone: " + ammenity.phone + "</div>")
      newMarker.setIcon(markerIcons[term])
      ammenityLayer.addLayer(newMarker)
    }
  }
}
