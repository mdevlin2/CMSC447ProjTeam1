var stateInfo = {
	"Maryland": {
			"Allegany County": ["NONE", "Cumberland", "Frostburg"],
			"Anne Arundel County": ["NONE", "Annapolis"],
			"Baltimore County": ["NONE"],
			"Calvert County": ["NONE"],
			"Caroline County": ["NONE"],
			"Carroll County": ["NONE", "Westminster", "Mount Airy"],
			"Cecil County": ["NONE"],
			"Charles County": ["NONE"],
			"Dorchester County": ["NONE", "Cambridge"],
			"Frederick County": ["NONE", "Brunswick", "Frederick"],
			"Garrett County": ["NONE"],
			"Harford County": ["NONE", "Aberdeen", "Havre de Grace"],
			"Howard County": ["NONE"],
			"Kent County": ["NONE"],
			"Montgomery	County": ["NONE", "Gaithersburg", "Rockville", "Takoma Park"],
			"Prince George's County": ["NONE", "Bowie", "College Park", "District Heights", "Glenarden", "Greensbelt", "Hyattsville", "Laurel", "Mount Rainier", "New Carrollton", "Seat Pleasant"],
			"Queen Anne's County": ["NONE"],
			"Saint Mary's County": ["NONE"],
			"Somerset County": ["NONE", "Crisfield"],
			"Talbot County": ["NONE"],
			"Washington County": ["NONE", "Hagerstown"],
			"Wicomico County": ["NONE", "Fruitland", "Salisbury"],
			"Worcester County": ["NONE", "Pocomoke City"]
		},
	"Delaware": {
			"New Castle County": ["NONE", "Delaware City", "Middletown", "New Castle", "Newark", "Wilmington"],
			"Sussex County": ["NONE", "Lewes", "Milford", "Rehoboth Beach", "Seaford"],
			"Kent County": ["NONE", "Dover", "Harrington", "Milford"]
		}
	}

window.onload = function () {
	
	//Get html elements
	var stateSel = document.getElementById("stateSel");	
	var citySel = document.getElementById("citySel");
	var countySel = document.getElementById("countySel");
	
	//Load States
	for (var state in stateInfo) {
		stateSel.options[stateSel.options.length] = new Option(state, state);
	}
	
	// display correct counties
	stateSel.onchange = function () {		 
		 
		 citySel.length = 1; // remove all options bar first
		 countySel.length = 1; // remove all options bar first
		 
		 if (this.selectedIndex < 1)
			 return; // done
		 
		 for (var county in stateInfo[this.value]) {
			 countySel.options[countySel.options.length] = new Option(county, county);
		 }
	}
	
	// display correct cities
	countySel.onchange = function () {
		citySel.length = 1; // remove all options bar first
		
		if (this.selectedIndex < 1)
			return; // done
		
		var city = stateInfo[stateSel.value][this.value];
		for (var i = 0; i < city.length; i++) {
			citySel.options[citySel.options.length] = new Option(city[i], city[i]);
		}
	}	
}

function SearchMap(){
	var stateVal = document.getElementById("stateSel").value;	
	var cityVal = document.getElementById("citySel").value;
	var countyVal = document.getElementById("countySel").value;

	if( (stateVal != null) && (cityVal != null) && (countVal != null) ){
		window.location = "http://localhost:8000/map.html";
	}
	return false;
}