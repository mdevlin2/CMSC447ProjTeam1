# -*- coding: utf-8 -*-
"""
Yelp Fusion API code sample.

This program demonstrates the capability of the Yelp Fusion API
by using the Search API to query for businesses by a search term and location,
and the Business API to query additional information about the top result
from the search query.

Please refer to http://www.yelp.com/developers/v3/documentation for the API
documentation.

This program requires the Python requests library, which you can install via:
`pip install -r requirements.txt`.

Sample usage of the program:
`python sample.py --term="bars" --location="San Francisco, CA"`
"""
from __future__ import print_function
from models.location import Place
from models.routes import YelpRoutes
import json
import requests
import sys
import urllib



# This client code can run on Python 2.x or 3.x.  Your imports can be
# simpler if you only need one of those.
try:
    # For Python 3.0 and later
    from urllib.error import HTTPError
    from urllib.parse import quote
    from urllib.parse import urlencode
except ImportError:
    # Fall back to Python 2's urllib2 and urllib
    from urllib2 import HTTPError
    from urllib import quote
    from urllib import urlencode


# Yelp Fusion no longer uses OAuth as of December 7, 2017.
# You no longer need to provide Client ID to fetch Data
# It now uses private keys to authenticate requests (API Key)
# You can find it on
# https://www.yelp.com/developers/v3/manage_app
API_KEY= "A3xPL54CKC9ceV9gbpC7DK3xMjTbVGDKkrwzjVQMY8LgI5g_3s-hUIlG_YB1Y63g5mT5c4xbTEynC0FKhf-J7eKeLoe_loZGLu9lsr27t2aiiBVvqD8GO9V2tj7RWnYx"


# Defaults for our simple example.
SEARCH_LIMIT = 10

# Make sure the business dictionary has all the keys we need
def validateBusiness(business):
    if not "name" in business:
        return False

    if not "coordinates" in business:
        return False



    return True

# Builds a place based on the business entry
def buildPlace(term, business):
    name = business["name"]
    id = business["id"]
    lat = business["coordinates"]["latitude"]
    long = business["coordinates"]["longitude"]
    title = "N/A"
    phone = "N/A"
    image = "images/na.jpg"

    if "categories" in business:
        if "title" in business["categories"]:
            title = business["categories"]["title"]
    if "phone" in business:
        phone = business["phone"]
    if "image_url" in business:
        image = business["image_url"]

    newPlace = Place(name, lat, long, term)
    newPlace.phone = phone
    newPlace.title = title
    newPlace.image = image
    return newPlace

# Yelp communicates with the yelp API
class Yelp:
    def __init__(self, rest):
        self.api_key = API_KEY
        self.host = 'https://api.yelp.com'
        self.routes = YelpRoutes()
        self.rest = rest

    # request takes care of any http requests needed for the yelp api
    def request(self, path, url_params=None):
        """Given your API_KEY, send a GET request to the API.

        Args:
            host (str): The domain host of the API.
            path (str): The path of the API after the domain.
            API_KEY (str): Your API Key.
            url_params (dict): An optional set of query parameters in the request.

        Returns:
            dict: The JSON response from the request.

        Raises:
            HTTPError: An error occurs from the HTTP request.
        """
        url_params = url_params or {}
        url = '{0}{1}'.format(self.host, quote(path.encode('utf8')))
        headers = {
            'Authorization': 'Bearer %s' % self.api_key,
        }

        print(u'Querying {0} ...'.format(url))
        print(url_params)
        print(headers)

        response, err = self.rest.GetWithAuthentication(url, header=headers, data=url_params)
        if not err == None:
            print("yelp.request got unexpected error: ", err)
            return None

        return response

    def search_lat(self, term, latitude, longitude, radius):
        """Query the Search API by a search term and location.

        Args:
            term (str): The search term passed to the API.
            location (str): The search location passed to the API.

        Returns:
            dict: The JSON response from the request.
        """

        url_params = {
            'term': term.replace(' ', '+'),
            'latitude': str(latitude),
            'longitude': str(longitude),
            'radius': str(radius),
            'limit': SEARCH_LIMIT
        }
        data = self.request(self.routes.termSearch, url_params=url_params)
        if data == None:
            return None
        return data

    # getAmmenities gets a list of amenities based on lat and long and term
    def getAmmenities(self, terms, latitude, longitude, radius):
        """Queries the API by the input values from the user.

        Args:
            term (str): The search term to query.
            location (str): The location of the business to query.
        """
        results = dict()
        print("lat: ", latitude, "long: ", longitude)
        meterRadius = radius * 1609

        if len(terms) == 0:
            print("terms is empty")
            return results

        for term in terms:
            businessList = list()
            response = self.search_lat(term, latitude, longitude, meterRadius)
            if response == None:
                return None
            businesses = response['businesses']


            if not businesses:
                print(u'No businesses for {0}'.format(term))
                return results

            # find the minimum search limit
            limit = SEARCH_LIMIT
            if len(businesses) < SEARCH_LIMIT:
                limit = len(businesses)

            print(u'{0} businesses found, querying business info ' \
                'for the top {1} results "" ...'.format(
                    len(businesses), limit))
            # Find either the SEARCH_LIMIT number of places or the length of businesses found
            for i in range(limit):
                business = businesses[i]
                if validateBusiness(business):
                    newPlace = buildPlace(term, business)
                    businessList.append(newPlace.__dict__)
            results[term] = businessList
        return results
