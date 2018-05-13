
var marylandCounties = [
"Allegany",
"Anne Arundel",
"Baltimore",
"Calvert",
"Caroline",
"Carroll",
"Cecil",
"Charles",
"Dorchester",
"Frederick",
"Garrett",
"Harford",
"Howard",
"Kent",
"Montgomery",
"Prince Georges",
"Queen Annes",
"Saint Marys",
"Somerset",
"Talbot",
"Washington",
"Wicomico",
"Worcester"
]

var delawareCounties = [
	"New Castle",
	"Sussex",
	"Kent"
]

var stateInfo = {
	"Maryland": marylandCounties,
	"Delaware": delawareCounties,
	}

var stateAbbrev = {
	"Maryland": "MD",
	"Delaware": "DE"
}



function loadingOn(loading) {
	loading.style.display = "inline-block"
	return
}

function loadingOff(loading){
	loading.style.display = "none"
	return
}

// What happens to the rest of the document when we change counties
function changedCounties(){
	var citySel = document.getElementById("citySel")
	var citySelRow = document.getElementById("citySelRow")
	var submitBut = document.getElementById("searchButton")
	citySel.length = 1
	citySelRow.style.display = "none"
	submitBut.style.display = "none"

	return
}

// What happens to the rest of the document when we change a state
function changedState(){
	var countySel = document.getElementById("countySel")
	var countySelRow = document.getElementById("countySelRow")
	countySel.length = 1; // remove all options bar first
	countySelRow.style.display = "table-row"
	changedCounties()
}

window.onload = function () {
	addHome()
	addMap()
	addFavorites()
	var loc = localStorage.getItem("location")
	if (loc == null){
		var location = new Location()
		location.state = "Maryland"
		location.county = "Baltimore"
		location.lat = 39.25560152079427
		location.long = -76.71099543571474
		var locationData = JSON.stringify(location)
		localStorage.setItem("location", locationData)
	}
	//Get html elements
	var stateSel = document.getElementById("stateSel");
	var citySel = document.getElementById("citySel");
	var citySelRow = document.getElementById("citySelRow")
	var countySel = document.getElementById("countySel");
	var submitBut = document.getElementById("searchButton");
	var icon = document.getElementById("loadingIcon")
	var state = document.getElementById("state");
	var county = document.getElementById("county");
	var city = document.getElementById("city");

	//Load States
	for (var state in stateInfo) {
		stateSel.options[stateSel.options.length] = new Option(state, state);
	}

	// display correct counties
	stateSel.onchange = function () {
		changedState()

		// Ignore the default selection
		if (this.selectedIndex < 1) { return; }
		for (var county in stateInfo[this.value]) {
			console.log("stateinfo: " + stateInfo[this.value][county])
			countySel.options[countySel.options.length] = new Option(stateInfo[this.value][county], stateInfo[this.value][county]);
		}
	}

	// display correct cities
	countySel.onchange = function () {
		var location = localStorage.getItem("location")
		if (location == null){
			location = new Location()
		} else {
			location = JSON.parse(location)
		}

		location.state = stateSel.value
		location.county = this.value

		changedCounties()

		// Ignore the default selection
		if (this.selectedIndex < 1){ return; }
		// Show that we are loading
		loadingOn(icon)
		req = getCitiesRequest(stateAbbrev[stateSel.value], countySel.value)
		req.onreadystatechange = function(){
			if (requestReady(req)){

				// Done loading
				loadingOff(icon)

				var resp = JSON.parse(req.responseText)

				// Update the location cookie
				location.long = resp.data[0].long
				location.lat = resp.data[0].lat
				locationData = JSON.stringify(location)
				localStorage.setItem("location", locationData)

				// Populate the cities selection
				var cityList = resp.data[0].cities
				for (index in cityList){
					citySel.options[citySel.options.length] = new Option(cityList[index].name, JSON.stringify(cityList[index]))
				}
				citySelRow.style.display = "table-row"
				submitBut.style.display = "inline-block"


			}
		}
		req.send()
	}

	citySel.onchange = function() {
		var location = localStorage.getItem("location")
		var location = JSON.parse(location)

		if (this.selectedIndex < 1) { return; }
		var city = JSON.parse(this.value)

		// Update the location cookie
		location.city = city.name
		location.lat = city.lat
		location.long = city.long
		locationData = JSON.stringify(location)
		localStorage.setItem("location", locationData)


		submitBut.style.display = "inline-block"

	}
}


function getCitiesRequest(state, county){
	var url = getCitiesRoute(state, county)
	var req = new XMLHttpRequest()
	req.open("GET", url)
	return req
}
