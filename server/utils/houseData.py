from models.location import HouseCharacteristics, House, Agency
import random as r
NUM_OF_PROPERTIES = 4
NUM_OF_CLUSTERS = 9
def newAddress():
    addressWords = ["Fake", "Bogus", "Counterfeit", "Fabricated", "Mock", "Phony", "Forged", "False",
                        "Copied", "False", "Wrong", "Sham", "Incorrect", "Mistake", "Help"]
    roads = ["Rd", "Way", "St.", "Blvd", "Cir.", "Dr."]
    return str(r.randint(1000, 9999)) + " " + addressWords[r.randint(0, len(addressWords)-1)] + " " +roads[r.randint(0, len(roads)-1)]

def makePhoneNumber():
    firstNumber = ["301", "240", "411", "214", "877", "800"]
    phone = ""
    phone = firstNumber[r.randint(0, len(firstNumber)-1)]
    phone = phone + "-"
    for i in range(3):
        phone = phone + str(r.randint(0, 9))
    phone = phone + "-"
    for i in range(4):
        phone = phone + str(r.randint(0, 9))

    return phone

def makeAgency():
    agencyNames = ["RE/Max", "Pinnacle real estate", "Coldwell Banker", "Government Auction"]
    phone = makePhoneNumber()
    agency = Agency(agencyNames[r.randint(0, len(agencyNames)-1)], phone)

    return agency

def makeHouses(lat, long, maxRadius, population, populationDenisty):
    houses = list()
    for j in range(NUM_OF_CLUSTERS):
        clusterLatOff = r.randint(-maxRadius, maxRadius)/800
        clusterLongOff = r.randint(-maxRadius, maxRadius)/800
        for i in range(NUM_OF_PROPERTIES):
            latOff = r.randint(-maxRadius, maxRadius)/2000 + clusterLatOff
            longOff = r.randint(-maxRadius, maxRadius)/2000 + clusterLongOff
            price = r.randint(100000, 400000)
            bedrooms = r.randint(1, 4)
            bathrooms = r.randint(1, 5)
            agency = makeAgency()
            hc = HouseCharacteristics(price, bedrooms, bathrooms, population, populationDenisty, agency.__dict__)
            newHouse = House( newAddress(), lat + latOff, long + longOff, hc.__dict__)
            houses.append(newHouse)
    return houses
