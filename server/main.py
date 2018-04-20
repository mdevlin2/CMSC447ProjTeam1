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
    newLoc = Location(state=args["state"], county=args["county"])
    return newLoc

def getLatLong(args):
    return args["lat"], args["long"]

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
    houses = zillow.getProperties(lat, long, request.args["maxRadius"])
    resp = makeResponse(houses, 0)
    return resp

# Params: {"state": string, "county": string}
@app.route('/cities', methods=['GET'])
def getCitiesRoute():
    newLoc = buildLoc(request.args)
    cityList = zillow.getCities(newLoc)
    err = 0
    if cityList == None:
        err = 1

    resp = makeResponse(cityList, err)

    # new response
    return resp

if __name__ == "__main__":
    app.run(debug=True)
