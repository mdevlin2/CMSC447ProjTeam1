var host = "http://localhost"
// checks an http request to see if its ready
function requestReady(resp){
  return (resp.readyState == 4 && resp.status == 200);
}

// Generates a url to make a request to the server
function getCitiesRoute(state, county){
  return host + ":5000/cities?" + "state=" + state + "&county=" + "\"" + county + "\""
}

// generates the url to make a request to the server
function getPropertyRoute(location){
  var slider = document.getElementById("searchRadius")
  return host + ":5000/properties?lat="+location.lat.toString()+"&long="+location.long.toString()+"&maxRadius="+slider.value.toString()+"&state="+location.state+"&county="+location.county+"&city="+location.city
}

function getAmmenitiesRoute(lat, long, radius, terms){
  var url = host + ":5000/ammenities?lat="+lat.toString()+"&long="+long.toString()+"&radius="+radius+"&terms="+terms
  return url
}

function getHomeLink(){
  return host + ":8000/index.html"
}

function getMapLink(){
  return host + ":8000/map.html"
}

function getFavoritesLink(){
  return host + ":8000/favorites.html"
}
