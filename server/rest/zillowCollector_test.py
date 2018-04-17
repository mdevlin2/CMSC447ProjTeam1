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

# Happy path of the zillowCollector
def TestZillowHappy():
    rest = rst.mockRest(mockData.GetRegionChildrenResponse)
    z = zc.Zillow(rest)
    l = loc.Location("", "")
    cityList = z.getCities(l)
    if not len(cityList) == 3:
        print("*"*10)
        print("*** zillowCollector UNIT TEST FAILED *** ")
        print("*** Length of city list is not correct")
        print("*"*10)
        return
    for c in cityList:
        if not validateCity(c):
            print("*"*10)
            print("*** zillowCollector UNIT TEST FAILED *** ")
            print("*** Not a valid city: ", str(c))
            print("*"*10)
            return
    print("*"*10)
    print("*** zillowCollector UNIT TEST PASSED *** ")
    print("*"*10)
    return
TestZillowHappy()
