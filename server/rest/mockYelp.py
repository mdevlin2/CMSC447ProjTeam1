from models.location import Place
import random as r

# make 25 places in our mock yelp
MAX_TEST_DATA = 25
TERMS = ["restaurant", "gym", "bike_paths", "pool"]

# make a place that yelp would return
def makePlace():
    newPlace = Place("place", r.randint(0, 70), r.randint(0, 70), "mock")
    return newPlace

# mock yelp for testing purposes
class mockYelp:
    def __init__(self, api_key):
        self.api_key = api_key
        self.host = "testHost"

    # getAmmenities gets fake ammenities and puts them in a dictionary by term
    def getAmmenities(terms, latitude, longitude, radius):
        results = dict()
        for term in terms:
            placeList = list()
            for i in range(MAX_TEST_DATA):
                newPlace = makePlace()
                placeList.append(newPlace)
            results[term] = placeList


        return results
