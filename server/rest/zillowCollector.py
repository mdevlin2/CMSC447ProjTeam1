import models.routes as route
import models.location
import utils.XMLdecoder as decode
import utils.houseData as housing
import requests as req

def formatString(str):
    return str.upper().replace("'", "").replace(" ", "").replace('"', "")

# This file will contain the functions to make API calls to Zillow.
class Zillow:
    def __init__(self, rest):
        self.id = "X1-ZWz1ga5ydrbpjf_8469v"
        self.routes = route.ZillowRoutes()
        self.rest = rest

    def getHeader(self, data):
        d = data.__dict__
        d["zws-id"] = self.id
        return d

    # Gets the cities within a given county and state
    def getCities(self, location):
        print("Getting from", location)
        data = self.getHeader(location)
        data['childtype'] = "city"
        resp, err = self.rest.Get(self.routes.GetRegionChildren, data)
        if not err == None:
            print("rest.zillowCollector.getCities got a GET error: ", err)
        cityList = decode.getCityList(resp)
        counties = self.getCounty(location)

        return cityList

    # get properties
    def getProperties(self, lat, long, maxRadius, population, populationDenisty):
        houses = housing.makeHouses(float(lat), float(long), int(maxRadius), population, populationDenisty)
        return houses

    def getCounty(self, location):
        newLocation = models.location.Location(location.state)
        data = self.getHeader(newLocation)
        data['childtype'] = "county"
        resp, err = self.rest.Get(self.routes.GetRegionChildren, data)
        if not err == None:
            print("rest.zillowCollector.getCounties got a GET error ", err)

        # getCityList returns City objects, but it will have county information
        countyList = decode.getCityList(resp)
        lookingFor = formatString(location.county)
        print("Looking for", lookingFor)
        for county in countyList:
            checkName = formatString(county.name)
            print("Checking ", checkName, " == ", lookingFor)
            if checkName == lookingFor:
                return models.location.County(county.name, county.lat, county.long)
        return None
