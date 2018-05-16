import sys
sys.path.append("../")


from utils.rest import mockRest
import yelp as y
import mockData


def fail(msg):
    print("*"*10)
    print("*** yelp UNIT TEST FAILED *** ")
    print("***", msg)
    print("*"*10)

def success():
    print("*"*10)
    print("*** yelp UNIT TEST PASSED *** ")
    print("*"*10)


# Tests the happy path of yelp
def TestYelpHappy():
    data = mockData.yelpBusinessSearchResponse
    rest = mockRest(data, None)
    
    yelp = y.Yelp(rest)
    terms = ["test"]
    lat = 10
    long = 10

    result = yelp.getAmmenities(terms, lat, long, 10)
    if result == None:
        fail("result should not be None")
        return
    success()
TestYelpHappy()


# tests the unhappy path of yelp
def TestYelpUnhappy():
    data = None
    err = "failure"
    rest = mockRest(data, err)
    yelp = y.Yelp(rest)
    terms = ["test"]
    lat = 10
    long = 10
    result = yelp.getAmmenities(terms, lat, long, 10)
    if not result == None:
        fail("result should be None")
        return
    success()
TestYelpUnhappy()
