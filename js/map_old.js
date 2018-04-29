//<![CDATA[
  $(window).resize(function () {
    var h = $(window).height(),
      offsetTop = 105; // Calculate the top offset

    $('#map_canvas').css('height', (h - offsetTop));
  }).resize();


var myMap = new MapsLib({
  fusionTableId:      "1m4Ez9xyTGfY2CU6O-UgEcPzlS0rnzLU93e4Faa0",
  googleApiKey:       "AIzaSyA3FQFrNr5W2OEVmuENqhb2MBB2JabdaOY",
  locationColumn:     "geometry",
  map_center:         [41.8781136, -87.66677856445312],
  locationScope:      "chicago"
});

var autocomplete = new google.maps.places.Autocomplete(document.getElementById('search_address'));

$(':checkbox').click(function(){
  myMap.doSearch();
});

$(':radio').click(function(){
  myMap.doSearch();
});

$('#search_radius').change(function(){
  myMap.doSearch();
});

$('#search').click(function(){
  getProperties()
  myMap.doSearch();
});

$('#find_me').click(function(){
  myMap.findMe();
  return false;
});

$('#reset').click(function(){
  myMap.reset();
  return false;
});

$(":text").keydown(function(e){
    var key =  e.keyCode ? e.keyCode : e.which;
    if(key === 13) {
        $('#search').click();
        return false;
    }
});
