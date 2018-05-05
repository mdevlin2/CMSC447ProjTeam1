from models.location import HouseCharacteristics, House
import random as r
NUM_OF_PROPERTIES = 15
NUM_OF_CLUSTERS = 8
def newAddress():
    addressWords = ["Fake", "Bogus", "Counterfeit", "Fabricated", "Mock", "Phony", "Forged", "False",
                        "Copied", "False", "Wrong", "Sham", "Incorrect", "Mistake", "Help"]
    roads = ["Rd", "Way", "St.", "Blvd", "Cir.", "Dr."]
    return str(r.randint(1000, 9999)) + " " + addressWords[r.randint(0, len(addressWords)-1)] + " " +roads[r.randint(0, len(roads)-1)]
def makeHouses(lat, long, maxRadius):
    houses = list()
    for j in range(NUM_OF_CLUSTERS):
        clusterLatOff = r.randint(-maxRadius, maxRadius)/4500
        clusterLongOff = r.randint(-maxRadius, maxRadius)/4500
        for i in range(NUM_OF_PROPERTIES):
            latOff = r.randint(-maxRadius, maxRadius)/12000 + clusterLatOff
            longOff = r.randint(-maxRadius, maxRadius)/12000 + clusterLongOff
            price = r.randint(100000, 400000)
            bedrooms = r.randint(1, 4)
            bathrooms = r.randint(1, 5)
            hc = HouseCharacteristics(price, bedrooms, bathrooms)
            newHouse = House( newAddress(), lat + latOff, long + longOff, hc.__dict__)
            houses.append(newHouse)
    return houses
