from enum import Enum
import json

# This can hold the different types of places
class Type(Enum):
    UNDEFINED = 0
    HOUSE = 1
    AGENCY = 2

# Specific place or ammenity (just an idea, feel free to change)
class Place:
    def __init__(self, name, lat, long):
        self.name = name
        self.lat = lat
        self.long = long
        self.type = Type.UNDEFINED
    def __str__(self):
        return "{ name: " + self.name + " lat: " + self.lat + " long: " + self.long + " type: " + str(self.type) + " }"

# cities that are inside a location
class City:
    def __init__(self, name, id):
        self.name = name
        self.id = id

    def __str__(self):
        return "{ name: " + self.name + " id: " + self.id + " }"

# Location of a given state and county
class Location:
    def __init__(self, state, county):
        self.county = county
        self.state = state
    def __str__(self):
        return "{ city: " + self.city + " county: " + self.county + " state: " + self.state + " }"
