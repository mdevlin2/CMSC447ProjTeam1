import models.routes as route
import utils.XMLdecoder as decode
import requests as req

# This file will contain the functions to make API calls to Zillow.
class Zillow:
    def __init__(self):
        self.id = "X1-ZWz1ga5ydrbpjf_8469v"
        self.routes = route.ZillowRoutes()

    def getHeader(self, data):
        d = data.__dict__
        d["zws-id"] = self.id
        return d

    # Gets the cities within a given county and state
    def getCities(self, location):
        data = self.getHeader(location)
        r = req.get(self.routes.GetRegionChildren, data)
        # f = open("rest/testXML", "r")
        # r = f.read()
        cityList = decode.getCityList(r.text)
        return cityList


    def getProperties(self, city):
        print("todo")
