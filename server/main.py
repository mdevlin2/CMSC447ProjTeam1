from flask import Flask, jsonify, request
from flask_cors import CORS
import json

import rest.zillowCollector as zc
from models.location import Location
from models.http import Response
from utils.rest import restUtil
import rest.yelp as yelp

app = Flask(__name__)
CORS(app)

rest = restUtil()
zillow = zc.Zillow(rest)

# build a city with the given arguements
def buildLoc(args):
    newLoc = None
    if "state" in args and "county" in args:
        newLoc = Location(state=args["state"])
        newLoc.addCounty(args["county"])
    return newLoc

def getLatLong(args):
    if "lat" in args and "long" in args:
        return args["lat"], args["long"]
    return None, None

# Convert a list of class structures to json
def makeResponse(data, err):
    nl = list()
    if not data == None:
        for i in data:
            nl.append(i.__dict__)

    resp = Response(nl)
    resp.err = err
    return jsonify(resp.__dict__)

def validateAmmenitiesRoute(args):
    if (not "lat" in args) and (not "long" in args):
        return False
    if "terms" not in args:
        return False

    if "radius" not in args:
        return False

    return True


# Params: { "lat": int, "long": int, "radius": int }
@app.route('/ammenities', methods=['GET'])
def getAmmenitiesRoute():
    print("Getting ammenities")
    req = request.args
    print(req)
    if not validateAmmenitiesRoute(req):
        print("Invalid args: ", req)
        return jsonify({"data": "invalid args", "err": 1})

    terms = req['terms'].split(',')
    print(terms)
    radius = int(req['radius'])
    lat, long = getLatLong(req)
    data = yelp.getAmmenities(terms, lat, long, radius)
    resp = {"data": data, "err": 0}
    # print(resp)
    return jsonify(resp)


# Params: { "lat": int, "long": int, "maxRadius": int}
@app.route('/properties', methods=['GET'])
def getPropertiesRoute():
    lat, long = getLatLong(request.args)
    if lat == None:
        print("lat and long parameters not provided")
        return makeResponse(None, 1)
    houses = zillow.getProperties(lat, long, request.args["maxRadius"])
    resp = makeResponse(houses, 0)
    return resp

# Params: {"state": string, "county": string}
@app.route('/cities', methods=['GET'])
def getCitiesRoute():

    newLoc = buildLoc(request.args)
    if newLoc == None:
        print("State or county not provided")
        return makeResponse(None, 1)

    cityList = zillow.getCities(newLoc)
    if cityList == None:
        print("could not get city list")
        return makeResponse(None, 1)

    county = zillow.getCounty(newLoc)
    if county == None:
        print(newLoc.county, " Not found")
        return makeResponse(None, 1)

    county.addCities(cityList)
    resp = makeResponse([county], 0)

    # new response
    return resp

if __name__ == "__main__":
    app.run(debug=True)
