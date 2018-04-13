import xml.etree.ElementTree as ET

class region:
    def __init__(self, name, long, lat):
        self.name = name
        self.long = long
        self.lat = lat
    def __str__(self):
        return "{ name: " + self.name + " long: " + str(self.long) + ", lat: " + str(self.lat) + "}"
def makeRegion(e):
    dictionary = {"latitude": 0, "name": "", "longitude": 0 }
    for r in e:
        print(r)
        dictionary[r.tag] = r.text
    return region(dictionary["name"], dictionary["longitude"], dictionary["latitude"])
def getRegionList(xml):
    regionList = list()
    root = ET.fromstring(xml)
    for r in root.iter("region"):
        print(r)
        newRegion = makeRegion(r)
        regionList.append(newRegion)
    return regionList
