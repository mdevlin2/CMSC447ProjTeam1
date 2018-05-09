var defaultFavTable = `
<tr>
    <th>State</th>
    <th>County</th>
    <th>Address</th>
    <th>Real estate Co.</th>
    <th>Phone</th>
</tr>
`
function deleteSavedHouse(index){
  console.log("deleteSavedHouse")
  var savedJson = localStorage.getItem("savedHouses")
  var savedHouses = JSON.parse(savedJson)
  savedHouses = savedHouses.splice(index, 0)
  var toSaveJson = JSON.stringify(savedHouses)
  localStorage.setItem("savedHouses", toSaveJson)

}

// makeNewLocation makes a new location object based on a house
function makeNewLocation(house){
  var loc = new Location()
  loc.state = house.state
  loc.county = house.county
  loc.lat = house.lat
  loc.long = house.long

  return loc
}

function createFavoriteEntry(house, index){
  var entry = document.createElement("tr")
  var state = document.createElement("td")
  var county = document.createElement("td")
  var address = document.createElement("button")
  var delImage = document.createElement("img")
  var delButton = document.createElement("button")
  var agencyName = document.createElement("td")
  var phone = document.createElement("td")


  state.innerHTML = house.state
  county.innerHTML = house.county
  address.innerHTML = house.address
  address.className = "addressButton"

  agencyName.innerHTML = house.characteristics.agency.name
  phone.innerHTML = house.characteristics.agency.phone
  address.onclick = function(){
    console.log("should go to map")
    var loc = makeNewLocation(house)
    localStorage.setItem("location", JSON.stringify(loc))
    window.location = "http://localhost:8000/map.html"
  }
  delImage.src = "images/deleteFavIcon.jpg"

  delButton.onclick = function(){
    var row = this.parentNode;
    row.parentNode.removeChild(row);
    deleteSavedHouse(index)
  }
  delButton.appendChild(delImage)
  entry.appendChild(state)
  entry.appendChild(county)
  entry.appendChild(address)
  entry.appendChild(agencyName)
  entry.appendChild(phone)
  entry.appendChild(delButton)
  return entry

}


function addFavs(state) {
  var favTable = document.getElementById("favTable");
  var stateFilter = document.getElementById("filterState");
  var houseInfo = localStorage.getItem("savedHouses");
  var posInfo = localStorage.getItem("location");

  var location = JSON.parse(posInfo)
  var savedHouses = JSON.parse(houseInfo)

  // update the faveTable
  favTable.innerHTML = defaultFavTable

  for (index in savedHouses) {
    var house = savedHouses[index]
    var entry = createFavoriteEntry(house, index)
    favTable.appendChild(entry)
  }
  return false;
}
