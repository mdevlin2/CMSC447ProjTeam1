import models.routes as route
import models.location
import utils.XMLdecoder as decode
import utils.houseData as housing
import requests as req

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
        data = self.getHeader(location)
        data['childtype'] = "city"
        resp, err = self.rest.Get(self.routes.GetRegionChildren, data)
        if not err == None:
            print("rest.zillowCollector.getCities got a GET error: ", err)
        cityList = decode.getCityList(resp)
        counties = self.getCounty(location)

        return cityList

    # get properties
    def getProperties(self, lat, long, maxRadius):
        houses = housing.makeHouses(float(lat), float(long), int(maxRadius))
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
        for county in countyList:
            if county.name.upper() == location.county.upper():
                return models.location.County(county.name, county.lat, county.long)
        return None
