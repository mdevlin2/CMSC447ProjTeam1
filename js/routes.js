
// checks an http request to see if its ready
function requestReady(resp){
  return (resp.readyState == 4 && resp.status == 200);
}

// Generates a url to make a request to the server
function getCitiesRoute(state, county){
  return "http://localhost:5000/cities?" + "state=" + state + "&county=" + "\"" + county + "\""
}

// generates the url to make a request to the server
function getPropertyRoute(lat, long){
  var slider = document.getElementById("searchRadius")
  return "http://localhost:5000/properties?lat="+lat.toString()+"&long="+long.toString()+"&maxRadius="+slider.value.toString()
}
