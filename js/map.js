var mymap = L.map('map');
var umbc_lat = 39.25560152079427
var umbc_long = -76.71099543571474
var umbc = L.latLng(umbc_lat, umbc_long)
var markerLayer = L.layerGroup()

function checkState(resp){
  return (resp.readyState == 4 && resp.status == 200);
}

mymap.setView(umbc,20);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
{
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
              '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
              'Imagery © <a href="http://mapbox.com">Mapbox</a>',
          id: 'mapbox.streets'}).addTo(mymap);
mymap.addLayer(markerLayer)

function calculateRadius(map){
  var distance = map.getBounds().getNorthWest().distanceTo(map.getBounds().getSouthEast());
  console.log("Calculated radius: " + distance)
  return distance
}

function getMarkerFormat(place){
  if (place.thumbnail != null){
    return "<a href=" + place.fullurl + " target=\"_blank\">" + place.title + "</a>" + " <img src= \"" + place.thumbnail.source + "\"> ";
  } else {
    return "<a href=" + place.fullurl + ">" + place.title + "</a>";
  }
}

function makeMarkers(data){
  markerLayer.clearLayers()

}
