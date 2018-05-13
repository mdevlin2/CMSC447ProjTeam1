// makes a button to save a house
function makeSaveButton(house){
  var saveButton = document.createElement("button")
  saveButton.innerHTML="Save"
  saveButton.style.className = "saveButton"
  saveButton.onclick = function(){
    var saveJson = localStorage.getItem("savedHouses")
    var locJson = localStorage.getItem("location")
    if (locJson == null){
      console.log("cannot save house location is null")
      return
    }

    var location = JSON.parse(locJson)

    if (saveJson == null){
      saveJson = '[]'
    }

    var houseArr = JSON.parse(saveJson)
    houseArr.push(house)
    var saveInfo = JSON.stringify(houseArr)
    localStorage.setItem("savedHouses", saveInfo)

    // Remove this from the parent and replace it with a label
    var savedLabel = makeSavedLabel()
    this.parentNode.appendChild(savedLabel)
    this.parentNode.removeChild(this)

  }

  return saveButton
}

// Makes a label for already saved houses
function makeSavedLabel(){
  var savedLabel = document.createElement("td")
  savedLabel.innerHTML = "Saved"
  return savedLabel
}

// Creates a house entry in the results table
function createHouseEntry(house, favorite){
  var item = document.createElement("tr")
  var address = document.createElement("td")
  var addressButton = document.createElement("button")
  var price = document.createElement("td")
  var nBathrooms = document.createElement("td")
  var nBeds = document.createElement("td")
  var agencyName = document.createElement("td")
  var phone = document.createElement("td")

  var slider = document.getElementById("searchRadius")
  var saveButton;
  if (favorite){
    saveButton = makeSavedLabel()
  } else {
    saveButton = makeSaveButton(house)
  }

  addressButton.innerHTML = house.address
  addressButton.className = "addressButton"
  addressButton.onclick = function(){
    var coors = L.latLng(house.lat, house.long)
    mymap.setView(coors, 20)
  }

  address.appendChild(addressButton)
  var money = house.characteristics.price.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c; });
  price.innerHTML = "$" + money
  nBathrooms.innerHTML = house.characteristics.bathrooms
  nBeds.innerHTML = house.characteristics.bedrooms
  agencyName.innerHTML = house.characteristics.agency.name
  phone.innerHTML = house.characteristics.agency.phone

  item.appendChild(address)
  item.appendChild(price)
  item.appendChild(nBathrooms)
  item.appendChild(nBeds)
  item.appendChild(agencyName)
  item.appendChild(phone)
  item.appendChild(saveButton)

  return item
}

function updateResults(house, favorite){
  var list = document.getElementById("resultList")
  var entry = createHouseEntry(house, favorite)
  list.appendChild(entry)

}
