import requests as req
import models.routes
class restUtil:

    def Get(self, route, data):
        r = req.get(route, data)
        if r.status_code > 299 or r.status_code < 200:
            return "", str("rest.Get got bad status code: ", r.status_code)
        return r.text, None

class mockRest:
    def __init__(self, data):
        self.toReturn = data

    def Get(self, route, data):
        return self.toReturn, None
