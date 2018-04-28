var stateInfo = {
	"Maryland": {
			"Allegany County": ["NONE", "Barton", "Cumberland", "Frostburg", "Lonaconing", "Luke,Midland", "Westernport"],
			"Anne Arundel County": ["NONE", "Annapolis", "Highland Beach"],
			"Baltimore County": ["NONE"],
			"Calvert County": ["NONE", "Chesapeake Beach", "North Beach"],
			"Caroline County": ["NONE", "Denton", "Federalsburg", "Goldsboro", "Greensboro", "Henderson", "Hillsboro", "Marydel", "Preston,Ridgely", "Templeville"],
			"Carroll County": ["NONE", "Hampstead", "Manchester", "Mount Airy", "New Windsor", "Sykesville", "Taneytown", "Union Bridge", "Westminster"],
			"Cecil County": ["NONE", "Cecilton", "Charlestown", "Chesapeake City", "Elkton", "North East", "Perryville", "Port Deposit", "Rising Sun"],
			"Charles County": ["NONE", "Indian Head", "La Plata", "Port Tobacco Village"],
			"Dorchester County": ["NONE", "Brookview", "Cambridge", "Church Creek", "East New Market", "Eldorado", "Galestown", "Hurlock", "Secretary", "Vienna"],
			"Frederick County": ["NONE", "Brunswick", "Burkittsville" , "Emmitsburg", "Frederick", "Middletown", "Mount Airy", "Myersville", "New Market,Rosemont", "Thurmont", "Walkersville", "Woodsboro"],
			"Garrett County": ["NONE", "Accident", "Deer Park", "Friendsville", "Grantsville", "Kitzmiller", "Loch Lynn Heights", "Mountain Lake Park", "Oakland"],
			"Harford County": ["NONE", "Aberdeen", "Bel Aire", "Havre de Grace"],
			"Howard County": ["NONE", "Mount Airy"],
			"Kent County": ["NONE", "Betterton", "Bowers", "Camden", "Cheswold", "Chestertown", "Clayton", "Dover", "Farmington", "Felton", "Frederica", "Galena", "Harrington", "Hartly", "Houston", "Kenton", "Leipsic", "Little Creek", "Magnolia", "Milford", "Millington", "Rock Hall",  "Smyrna", "Woodside", "Wyoming", "Viola" ],
			"Montgomery	County": ["NONE", "Barnesville", "Brookeville", "Chevy Chase", "Chevy Chase Section Five" , "Chevy Chase Section Three", "Chevy Chase View", "Chevy Chase Village", "Gaithersburg", "Garrett Park", "Glen Echo", "Kensington", "Laytonsville", "Martin's Additions", "Mount Airy", "North Chevy Chase", "Poolesville", "Rockville", "Somerset", "Takoma Park", "Washington Grove" ],
			"Prince George's County": ["NONE", "Berwyn Heights", "Bladensburg", "Bowie", "Brentwood", "Capitol Heights", "Cheverly", "College Park", "Colmar Manor", "Cottage City", "District Heights", "Eagle Harbor", "Edmonston", "Fairmount Heights", "Forest Heights", "Glenarden", "Greenbelt", "Hyattsville", "Landover Hills", "Laurel", "Morningside", "Mount Rainier", "New Carrollton", "North Brentwood", "Riverdale Park", "Seat Pleasant", "University Park", "Upper Marlboro"],
			"Queen Anne's County": ["NONE", "Barclay", "Centreville", "Church Hill", "Millington", "Queen Anne", "Queenstown", "Sudlersville", "Templeville"],
			"Saint Mary's County": ["NONE"],
			"Somerset County": ["NONE", "Crisfield", "Princess Anne"],
			"Talbot County": ["NONE", "Easton", "Oxford", "Queen Anne", "St. Michaels", "Trappe"],
			"Washington County": ["NONE", "Boonsboro", "Clear Spring", "Funkstown", "Hagerstown", "Hancock", "Keedysville", "Sharpsburg", "Smithsburg", "Williamsport"],
			"Wicomico County": ["NONE", "Delmar", "Fruitland", "Hebron", "Mardela Springs", "Pittsville", "Salisbury", "Sharptown", "Willards"],
			"Worcester County": ["NONE", "Berlin", "Ocean City", "Pocomoke City", "Snow Hill"]
		},
	"Delaware": {
			"New Castle County": ["NONE", "Arden", "Ardencroft", "Ardentown", "Bellefonte", "Clayton", "Delaware City", "Elsmere", "Middletown", "New Castle", "Newark", "Newport", "Odessa", "Smyrna", "Townsend", "Wilmington"],
			"Sussex County": ["NONE", "Blades", "Bethany Beach", "Bethel", "Bridgeville", "Dagsboro", "Delmar", "Dewey Beach", "Ellendale", "Frankford", "Fenwick Island", "Georgetown", "Greenwood", "Henlopen Acres", "Laurel", "Lewes", "Millville", "Milford", "Millsboro", "Milton", "Ocean View", "Rehoboth Beach", "Seaford", "Selbyville", "Slaughter Beach", "South Bethany"],
			"Kent County": ["NONE", "Betterton", "Bowers", "Camden", "Clayton", "Chestertown", "Cheswold", "Dover", "Farmington", "Felton", "Frederica", "Galena", "Harrington", "Hartly", "Houston", "Kenton", "Leipsic", "Little Creek", "Magnolia", "Milford", "Millington", "Rock Hall", "Smyrna",  "Viola", "Woodside", "Wyoming"]
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