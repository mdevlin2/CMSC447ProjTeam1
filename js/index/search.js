function SearchMap(){
	var stateVal = document.getElementById("stateSel").value;
	var cityVal = document.getElementById("citySel").value;
	var countyVal = document.getElementById("countySel").value;
	console.log(stateVal + " " + cityVal + " " + countyVal)
	if( (stateVal != null) && (cityVal != null) && (countyVal != null) ){
		window.location = getMapLink();
	}
	return false;
}
