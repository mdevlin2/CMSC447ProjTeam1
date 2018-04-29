from flask import Flask, jsonify, request
from flask_cors import CORS
import json

import rest.zillowCollector as zc
from models.location import Location
from models.http import Response
from utils.rest import restUtil

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
