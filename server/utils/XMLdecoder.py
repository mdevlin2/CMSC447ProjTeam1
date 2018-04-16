import xml.etree.ElementTree as ET
import models.location as loc

def makeCity(e):
    newCity = loc.City(e[1].text, e[0].text)
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
    cityList = list()
    root = ET.fromstring(xml)


    for r in root.iter("region"):
        newCity = makeCity(r)
        print(newCity)
        cityList.append(newCity)
    return cityList
