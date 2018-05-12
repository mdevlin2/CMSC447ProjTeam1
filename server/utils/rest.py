import requests as req
import models.routes
class restUtil:
    def GetWithAuthentication(self, route, header, data):
        r = req.get(route, params=data, headers=header)
        if r.status_code > 299 or r.status_code < 200:
            return "", str("rest.GetWithAuthentication got a bad status code ", r.status_code)
        return r.json(), None

    def Get(self, route, data):
        r = req.get(route, params=data)
        if r.status_code > 299 or r.status_code < 200:
            return "", str("rest.Get got bad status code: ", r.status_code)
        return r.text, None

# mockRests is used in classes that make http requests for testin purposes
# it will return valid data, or return an error
class mockRest:
    def __init__(self, data, err):
        self.toReturn = data
        self.err = err

    def Get(self, route, data):
        return self.toReturn, self.err
    def GetWithAuthentication(self, route, header, data):
        return self.toReturn, self.err
