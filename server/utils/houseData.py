from models.location import HouseCharacteristics, House, Type
import random as r
NUM_OF_PROPERTIES = 100

def makeHouses(lat, long, maxRadius):
    houses = list()
    for i in range(NUM_OF_PROPERTIES):
        lat_off = r.randint(-maxRadius, maxRadius)/100
        long_off = r.randint(-maxRadius, maxRadius)/100
        price = r.randint(100000, 400000)
        bedrooms = r.randint(1, 4)
        bathrooms = r.randint(1, 5)
        hc = HouseCharacteristics(price, bedrooms, bathrooms)
        newHouse = House("1234 notFake rd", lat + lat_off, long + long_off, hc.__dict__)
        houses.append(newHouse)
    return houses
