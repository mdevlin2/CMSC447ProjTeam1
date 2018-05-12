GetRegionChildrenResponse = """<?xml version="1.0" encoding="utf-8"?>
<RegionChildren:regionchildren xsi:schemaLocation="http://www.zillow.com/static/xsd/RegionChildren.xsd https://www.zillowstatic.com/vstatic/b20c067/static/xsd/RegionChildren.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:RegionChildren="http://www.zillow.com/static/xsd/RegionChildren.xsd">
    <request>
        <state>md</state>
        <county>"Baltimore"</county>
        <childtype>city</childtype>
    </request>
    <message>
        <text>Request successfully processed</text>
        <code>0</code>
    </message>
    <response>
        <region>
            <id>2626</id>
            <latitude>39.458153</latitude>
            <longitude>-76.601906</longitude>
        </region>
        <subregiontype>city</subregiontype>
        <list>
            <count>3</count>
            <region>
                <id>11170</id>
                <name>Dundalk</name>
                <zindex currency="USD">125500</zindex>
                <url>http://www.zillow.com/local-info/MD-Dundalk/r_11170/</url>
                <latitude>39.260511</latitude>
                <longitude>-76.486107</longitude>
            </region>
            <region>
                <id>28948</id>
                <name>Owings Mills</name>
                <zindex currency="USD">226600</zindex>
                <url>http://www.zillow.com/local-info/MD-Owings-Mills/r_28948/</url>
                <latitude>39.436995</latitude>
                <longitude>-76.780392</longitude>
            </region>
            <region>
                <id>44490</id>
                <name>Catonsville</name>
                <zindex currency="USD">268400</zindex>
                <url>http://www.zillow.com/local-info/MD-Catonsville/r_44490/</url>
                <latitude>39.269303</latitude>
                <longitude>-76.739626</longitude>
            </region>
        </list>
    </response>
</RegionChildren:regionchildren>
<!-- H:045  T:693ms  S:5249  R:Sun Apr 15 20:35:29 PDT 2018  B:5.0.53029.1-hotfix_ADAT-2519.69881bc~hotfix-platform-for-2018-04-11.319b04e -->
 """

yelpBusinessSearchResponse = """
{
    "businesses": [
        {
            "id": "Xg-FyjVKAN70LO4u4Z1ozg",
            "alias": "hog-island-oyster-co-san-francisco",
            "name": "Hog Island Oyster Co",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/sSxgesuVoFD1_5w6FOoouQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hog-island-oyster-co-san-francisco?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 4992,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "seafoodmarkets",
                    "title": "Seafood Markets"
                },
                {
                    "alias": "raw_food",
                    "title": "Live/Raw Food"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.795831,
                "longitude": -122.393303
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1 Ferry Bldg",
                "address2": "",
                "address3": "Shop 11",
                "city": "San Francisco",
                "zip_code": "94111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1 Ferry Bldg",
                    "Shop 11",
                    "San Francisco, CA 94111"
                ]
            },
            "phone": "+14153917117",
            "display_phone": "(415) 391-7117",
            "distance": 1154.8167382059307
        },
        {
            "id": "PsY5DMHxa5iNX_nX0T-qPA",
            "alias": "kokkari-estiatorio-san-francisco",
            "name": "Kokkari Estiatorio",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/hL5JQzUDA06eqvmUtdUqZA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kokkari-estiatorio-san-francisco?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 4026,
            "categories": [
                {
                    "alias": "greek",
                    "title": "Greek"
                },
                {
                    "alias": "mediterranean",
                    "title": "Mediterranean"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.797,
                "longitude": -122.39988
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "200 Jackson St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "200 Jackson St",
                    "San Francisco, CA 94111"
                ]
            },
            "phone": "+14159810983",
            "display_phone": "(415) 981-0983",
            "distance": 1095.5713777404528
        },
        {
            "id": "ZoZjbOYR-apY8XvommlNUA",
            "alias": "the-house-san-francisco",
            "name": "The House",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/K48sSeIuHURatMBrSTfOTg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-house-san-francisco?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 4270,
            "categories": [
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7986203,
                "longitude": -122.4070251
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1230 Grant Ave",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94133",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1230 Grant Ave",
                    "San Francisco, CA 94133"
                ]
            },
            "phone": "+14159868612",
            "display_phone": "(415) 986-8612",
            "distance": 1430.826147431335
        },
        {
            "id": "_EncdQezAzcShATMFXL0dA",
            "alias": "tropisueño-san-francisco-3",
            "name": "Tropisueño",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/hUZgDmue1VRfvIXai6I0wg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/tropisue%C3%B1o-san-francisco-3?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 3717,
            "categories": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7853008468227,
                "longitude": -122.403918653727
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$",
            "location": {
                "address1": "75 Yerba Buena Ln",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "75 Yerba Buena Ln",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14152430299",
            "display_phone": "(415) 243-0299",
            "distance": 388.84095376614835
        },
        {
            "id": "lJAGnYzku5zSaLnQ_T6_GQ",
            "alias": "brendas-french-soul-food-san-francisco",
            "name": "Brenda's French Soul Food",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/YT8ho02lCT6Ubu3vx8uCaw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/brendas-french-soul-food-san-francisco?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 9070,
            "categories": [
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "french",
                    "title": "French"
                },
                {
                    "alias": "soulfood",
                    "title": "Soul Food"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7829016035273,
                "longitude": -122.419043442957
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "652 Polk St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "652 Polk St",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14153458100",
            "display_phone": "(415) 345-8100",
            "distance": 1733.4379946566146
        },
        {
            "id": "bUr4iq2mKKiBOu2HKynylg",
            "alias": "hrd-san-francisco-4",
            "name": "HRD",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/ImvLt9I8ACHwfYthZw8vVw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hrd-san-francisco-4?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 2284,
            "categories": [
                {
                    "alias": "korean",
                    "title": "Korean"
                },
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                },
                {
                    "alias": "mexican",
                    "title": "Mexican"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7811065758548,
                "longitude": -122.395329724426
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "521A 3rd St",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94107",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "521A 3rd St",
                    "San Francisco, CA 94107"
                ]
            },
            "phone": "+14155432355",
            "display_phone": "(415) 543-2355",
            "distance": 760.8230840295653
        },
        {
            "id": "uEeWn6sPq-giWvfE9uhQ7A",
            "alias": "dotties-true-blue-cafe-san-francisco",
            "name": "Dottie's True Blue Cafe",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/TNPVifX6XGdEVpv_O9_1cA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/dotties-true-blue-cafe-san-francisco?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 3880,
            "categories": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7817050429594,
                "longitude": -122.409839630127
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "28 6th St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "28 6th St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14158852767",
            "display_phone": "(415) 885-2767",
            "distance": 1040.8408583328028
        },
        {
            "id": "zjlwTVZOyCU8OzzUPEavQQ",
            "alias": "super-duper-burgers-san-francisco-3",
            "name": "Super Duper Burgers",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/R_jqJrfJl0K8p-UxlalZ2w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/super-duper-burgers-san-francisco-3?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 2431,
            "categories": [
                {
                    "alias": "burgers",
                    "title": "Burgers"
                },
                {
                    "alias": "salad",
                    "title": "Salad"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7868189045762,
                "longitude": -122.40416383317
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "721 Market St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "721 Market St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14155383437",
            "display_phone": "(415) 538-3437",
            "distance": 368.4315655117984
        },
        {
            "id": "ykvr3ib1gHQHI4tznSn8iA",
            "alias": "wayfare-tavern-san-francisco-2",
            "name": "Wayfare Tavern",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Q6_WFMWeO7AtvKMLBWsPbg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/wayfare-tavern-san-francisco-2?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 3492,
            "categories": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7939484886016,
                "longitude": -122.402307987213
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "558 Sacramento St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "558 Sacramento St",
                    "San Francisco, CA 94111"
                ]
            },
            "phone": "+14157729060",
            "display_phone": "(415) 772-9060",
            "distance": 812.1263272941984
        },
        {
            "id": "KkAVX3Wb7E3lP5F_f_8pXg",
            "alias": "liholiho-yacht-club-san-francisco-2",
            "name": "Liholiho Yacht Club",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/FK2X98w6z5naJyiQjsGTNA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/liholiho-yacht-club-san-francisco-2?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 1710,
            "categories": [
                {
                    "alias": "bars",
                    "title": "Bars"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7882257887342,
                "longitude": -122.414598204196
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$$",
            "location": {
                "address1": "871 Sutter St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94109",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "871 Sutter St",
                    "San Francisco, CA 94109"
                ]
            },
            "phone": "+14154405446",
            "display_phone": "(415) 440-5446",
            "distance": 1293.947786566563
        },
        {
            "id": "8skVQNkVBv90iiPtFeSpzw",
            "alias": "zero-zero-san-francisco",
            "name": "Zero Zero",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/JB5XNOgdQHocE4nI9DHWkA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/zero-zero-san-francisco?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 2903,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.78163,
                "longitude": -122.40204
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$",
            "location": {
                "address1": "826 Folsom St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94107",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "826 Folsom St",
                    "San Francisco, CA 94107"
                ]
            },
            "phone": "+14153488800",
            "display_phone": "(415) 348-8800",
            "distance": 611.0623222850545
        },
        {
            "id": "q2EbLD93gEO5uXXx7Pk3bw",
            "alias": "benu-san-francisco-4",
            "name": "Benu",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UAN9WLyuD8E37pKDhlpe1g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/benu-san-francisco-4?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 925,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                },
                {
                    "alias": "wine_bars",
                    "title": "Wine Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.785402,
                "longitude": -122.399068
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "22 Hawthorne St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94105",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "22 Hawthorne St",
                    "San Francisco, CA 94105"
                ]
            },
            "phone": "+14156854860",
            "display_phone": "(415) 685-4860",
            "distance": 182.7393176979489
        },
        {
            "id": "lNbKeOfCMTNkoihZHqrbrg",
            "alias": "blue-bottle-coffee-san-francisco-21",
            "name": "Blue Bottle Coffee",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/YKoMObZPbtVi1l7f3g4xwg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/blue-bottle-coffee-san-francisco-21?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 2104,
            "categories": [
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7824664727379,
                "longitude": -122.407753326389
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "66 Mint St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "66 Mint St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+15106533394",
            "display_phone": "(510) 653-3394",
            "distance": 841.8265783359587
        },
        {
            "id": "Ml0ZjPaKXYmXTyGLvkhY8A",
            "alias": "samovar-tea-lounge-san-francisco-2",
            "name": "Samovar Tea Lounge",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JQeusAkt9mupl2wrWDWnUg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/samovar-tea-lounge-san-francisco-2?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 2173,
            "categories": [
                {
                    "alias": "tea",
                    "title": "Tea Rooms"
                },
                {
                    "alias": "gluten_free",
                    "title": "Gluten-Free"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7841774486315,
                "longitude": -122.402068620684
            },
            "transactions": [
                "pickup",
                "restaurant_reservation"
            ],
            "price": "$$",
            "location": {
                "address1": "730 Howard St",
                "address2": "",
                "address3": "Yerba Buena Gardens",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "730 Howard St",
                    "Yerba Buena Gardens",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14152279400",
            "display_phone": "(415) 227-9400",
            "distance": 352.68531114447455
        },
        {
            "id": "iWUSAD2WALWNFF0pPiomHA",
            "alias": "roys-restaurant-san-francisco-3",
            "name": "Roy's Restaurant",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/MojcoXubGedGlpbzjxIFhQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/roys-restaurant-san-francisco-3?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 2127,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7881,
                "longitude": -122.3991
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "575 Mission St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94105",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "575 Mission St",
                    "San Francisco, CA 94105"
                ]
            },
            "phone": "+14157770277",
            "display_phone": "(415) 777-0277",
            "distance": 147.92990377579156
        },
        {
            "id": "tnhfDv5Il8EaGSXZGiuQGg",
            "alias": "garaje-san-francisco",
            "name": "Garaje",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_nN_DhLXkfwEkwPNxne9hw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/garaje-san-francisco?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 1333,
            "categories": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                },
                {
                    "alias": "burgers",
                    "title": "Burgers"
                },
                {
                    "alias": "gastropubs",
                    "title": "Gastropubs"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.781752952057,
                "longitude": -122.396121970462
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "475 3rd St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94107",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "475 3rd St",
                    "San Francisco, CA 94107"
                ]
            },
            "phone": "+14156440838",
            "display_phone": "(415) 644-0838",
            "distance": 663.1309516727886
        },
        {
            "id": "Tttm1r5Dw1sRMCfc3EQWPw",
            "alias": "boulevard-san-francisco",
            "name": "Boulevard",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/lbxgYCYvMu1zNap7Wg741g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/boulevard-san-francisco?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 2470,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.79337,
                "longitude": -122.39274
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "1 Mission St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94105",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1 Mission St",
                    "San Francisco, CA 94105"
                ]
            },
            "phone": "+14155436084",
            "display_phone": "(415) 543-6084",
            "distance": 956.0267604505011
        },
        {
            "id": "ma-IFK7XaRdVwA9lxNyMXA",
            "alias": "señor-sisig-san-francisco-3",
            "name": "Señor Sisig",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/H3V68xyZWC3JNRs4kqHHbg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/se%C3%B1or-sisig-san-francisco-3?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 1355,
            "categories": [
                {
                    "alias": "filipino",
                    "title": "Filipino"
                },
                {
                    "alias": "foodtrucks",
                    "title": "Food Trucks"
                },
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.79059,
                "longitude": -122.40306
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94104",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "San Francisco, CA 94104"
                ]
            },
            "phone": "+18557474455",
            "display_phone": "(855) 747-4455",
            "distance": 507.3425498908006
        },
        {
            "id": "kEhq0qT_JFxgeh-pCS4lPA",
            "alias": "the-sentinel-san-francisco",
            "name": "The Sentinel",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/DZ5IEEYsi47slj-e51ejJA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-sentinel-san-francisco?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 1267,
            "categories": [
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7882977785009,
                "longitude": -122.401372356986
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "37 New Montgomery St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94105",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "37 New Montgomery St",
                    "San Francisco, CA 94105"
                ]
            },
            "phone": "+14152849960",
            "display_phone": "(415) 284-9960",
            "distance": 199.81617618665948
        },
        {
            "id": "dN_v0Lu6xhv0yJcx-M0fpg",
            "alias": "hakkasan-san-francisco-2",
            "name": "Hakkasan",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/NEDgv2eNNlJ5-VhN5zu9ZA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hakkasan-san-francisco-2?adjust_creative=xHD3ejKOH0gGKwQ3ndbgQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=xHD3ejKOH0gGKwQ3ndbgQQ",
            "review_count": 1472,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "cantonese",
                    "title": "Cantonese"
                },
                {
                    "alias": "dimsum",
                    "title": "Dim Sum"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.78771,
                "longitude": -122.40385
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1 Kearny St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94108",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1 Kearny St",
                    "San Francisco, CA 94108"
                ]
            },
            "phone": "+14158298148",
            "display_phone": "(415) 829-8148",
            "distance": 337.93169864290326
        }
    ],
    "total": 3700,
    "region": {
        "center": {
            "longitude": -122.399972,
            "latitude": 37.786882
        }
    }
}
"""
