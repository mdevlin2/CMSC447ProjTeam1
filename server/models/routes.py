
# Class to hold zillow routes
class ZillowRoutes:
    def __init__(self):
        self.GetRegionChildren = "http://www.zillow.com/webservice/GetRegionChildren.htm"
        self.getDeepSearch = "https://www.zillow.com/webservice/GetDeepSearchResults.htm"

class YelpRoutes:
    def __init__(self):
        self.termSearch = '/v3/businesses/search'
        self.businessSearch = '/v3/businesses/'
