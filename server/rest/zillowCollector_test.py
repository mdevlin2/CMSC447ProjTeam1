import sys
sys.path.append("../")

import zillowCollector as zc
import utils.rest as rst
import models.location as loc
import mockData

def validateCity(city):
    if city.name == "":
        return False
    if city.id == "":
        return False
    return True

def fail(msg):
    print("*"*10)
    print("*** zillowCollector UNIT TEST FAILED *** ")
    print("***", msg)
    print("*"*10)

def success():
    print("*"*10)
    print("*** zillowCollector UNIT TEST PASSED *** ")
    print("*"*10)

# Happy path of the zillowCollector
def TestCitiesRoute():
    rest = rst.mockRest(mockData.GetRegionChildrenResponse)
    z = zc.Zillow(rest)
    l = loc.Location("")
    l.addCounty("")
    cityList = z.getCities(l)
    if not len(cityList) == 3:
        fail("unexpected number of cities")
        return
    for c in cityList:
        if not validateCity(c):
            fail("invalid city "+str(c))
            return
    success()
    return
TestCitiesRoute()
