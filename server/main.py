from flask import Flask, jsonify, request
import json
import requests
import XMLdecoder
from flask_cors import CORS
import xml.etree.ElementTree as ET


app = Flask(__name__)
CORS(app)
class message:
    def __init__(self, msg):
        self.msg = msg;
        self.user = "server"

@app.route('/', methods=['GET', 'OPTIONS'])
def getMethod():
    msg = message("hello")
    return jsonify({"message": "hello"})

@app.route('/coords/', methods=['POST'])
def postCoords():
    print(request.data)
    data = json.loads(request.data)
    l = getCoords(data['region'], data['state'])
    str = json.dumps(l, default=lambda o: o.__dict__)
    print(str)
    return str

@app.route('/regions', methods=['GET'])
def getRegions():
    # print("getregions")
    # print(request.data)
    # data = json.loads(request.data)
    # print(data)
    # print(request)
    print("get regions")
    state = request.form["state"]
    print(state)
    return "nothing"

def getCoords(state):
    zillow = "http://www.zillow.com/webservice/GetRegionChildren.htm"
    id = "X1-ZWz1ga5ydrbpjf_8469v"
    data = {"state": state, "zws-id": id, 'childtype': "county"}

    r = requests.get(zillow, params=data)
    # r = open("test.xml", "r").read()
    l = XMLdecoder.getRegionList(r.text)
    for l2 in l:
        print(l2)

    return l

if __name__ == "__main__":
    app.run(debug=True)
