import xml.etree.ElementTree as ET
import models.location as loc

def getData(e):
    name = e.find("name")
    id = e.find("id")
    long = e.find("longitude")
    lat = e.find("latitude")

    return name, id, lat, long


def makeCity(e):
    name, id, lat, long = getData(e)
    if name == None or id == None:
        print("utils.XMLdecoder.makeCity Could not find name or id of city ", e)
        return None

    newCity = loc.City(name.text, lat.text, long.text, id.text)
    print(newCity)
    return newCity

def validate(xml):
    root = ET.fromstring(xml)
    message = root.find("message")
    if not message[1].text == "0":
        print("utils.XMLdecoder.validate XML response got a non-zero status code")
        return False
    return True

def getCityList(xml):
    if not validate(xml):
        print("utils.XMLdecoder.getCityList could not get city list")
        return None

    cityList = list()
    root = ET.fromstring(xml).find("response")
    if root == None:
        print("utils.XMLdecoder.getCityList XML response not found")
        return None

    regionList = root.find("list")


    for r in regionList.iter("region"):
        newCity = makeCity(r)
        if not newCity == None:
            print(newCity)
            cityList.append(newCity)

    return cityList
