from enum import Enum
import json

# This can hold the different types of places
class Type(Enum):
    UNDEFINED = 0
    AGENCY = 1
    GYM = 2

# characterizing a house
class HouseCharacteristics:
    def __init__(self, price, bedrooms, bathrooms):
        self.price = price

        #Number of bathrooms and bedrooms
        self.bedrooms = bedrooms
        self.bathrooms = bathrooms

# Describing a house
class House:
    def __init__(self, address, lat, long, characteristics):
        self.address = address
        self.lat = lat
        self.long = long
        self.characteristics = characteristics


# Specific place or ammenity (just an idea, feel free to change)
class Place:
    def __init__(self, name, lat, long, type):
        self.name = name
        self.lat = lat
        self.long = long
        self.type = Type.UNDEFINED
    def __str__(self):
        return "{ name: " + self.name + " lat: " + self.lat + " long: " + self.long + " type: " + str(self.type) + " }"

# cities that are inside a location
class City:
    def __init__(self, name, lat, long, id):
        self.name = name
        self.id = id
        self.long = long
        self.lat = lat

    def __str__(self):
        return "{ name: " + self.name + " id: " + self.id + " lat: " + str(self.lat) + " long: " + str(self.long) + " }"

# Location of a given state and county
class Location:
    def __init__(self, state, county):
        self.county = county
        self.state = state
    def __str__(self):
        return "{ city: " + self.city + " county: " + self.county + " state: " + self.state + " }"
