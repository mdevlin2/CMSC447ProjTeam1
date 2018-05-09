class Location {
  constructor(){
    this.state = "";
    this.county = "";
    this.city = "";
    this.lat = "";
    this.long = "";
  }
}

class Characteristics {
  constructor(charact){
    this.bedrooms = charact.bedrooms;
    this.bathrooms = charact.bathrooms;
    this.price = charact.price;
    this.population = charact.population;
  }
}

// bad constructor :(
class House {
  constructor(houseData, location){
    this.location = location;
    this.location.lat = houseData.lat;
    this.location.long = houseData.long;
    console.log("map will be going to: ", this.location.lat, this.location.long)
    this.address = houseData.address;
    this.price = houseData.price;
    this.lat = houseData.lat;
    this.long = houseData.long;
    this.characteristics = new Characteristics(houseData.characteristics)
  }
}
