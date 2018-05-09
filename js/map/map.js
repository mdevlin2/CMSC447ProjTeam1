var mymap = L.map('map');
var markerLayer = L.layerGroup()
var ammenityLayer = L.layerGroup()
var favLayer = L.layerGroup()

var defaultResultTable = `
<th>
  Address
</th>
<th>
  Price
</th>
<th>
  bathrooms
</th>
<th>
  beds
</th>
<th>
  Real estate Co.
</th>
<th>
  Phone
</th>
`

function checkState(resp){
  return (resp.readyState == 4 && resp.status == 200);
}

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
{
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
              '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
              'Imagery © <a href="http://mapbox.com">Mapbox</a>',
          id: 'mapbox.streets'}).addTo(mymap);
mymap.addLayer(markerLayer)
mymap.addLayer(ammenityLayer)
mymap.addLayer(favLayer)
