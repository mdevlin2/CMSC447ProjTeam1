class mockResponse{
  constructor(data, err){
    this.data = data
    this.err = err
  }
}

var testCityResp = `
{
    "data": [
        {
            "cities": [
                {
                    "id": "6183",
                    "lat": "39.660566",
                    "long": "-75.7008",
                    "name": "Newark"
                },
                {
                    "id": "14667",
                    "lat": "39.766437",
                    "long": "-75.56449",
                    "name": "Wilmington"
                },
                {
                    "id": "26091",
                    "lat": "39.639998",
                    "long": "-75.587156",
                    "name": "New Castle"
                },
                {
                    "id": "10301",
                    "lat": "39.6006",
                    "long": "-75.694914",
                    "name": "Bear"
                },
                {
                    "id": "34023",
                    "lat": "39.295709",
                    "long": "-75.56402",
                    "name": "Smyrna"
                },
                {
                    "id": "37901",
                    "lat": "39.795894",
                    "long": "-75.446345",
                    "name": "Claymont"
                },
                {
                    "id": "11931",
                    "lat": "39.785281",
                    "long": "-75.681999",
                    "name": "Hockessin"
                },
                {
                    "id": "19355",
                    "lat": "39.477436",
                    "long": "-75.664358",
                    "name": "Middletown"
                },
                {
                    "id": "29895",
                    "lat": "39.254916",
                    "long": "-75.692118",
                    "name": "Clayton"
                },
                {
                    "id": "38376",
                    "lat": "39.741416",
                    "long": "-75.591802",
                    "name": "Elsmere"
                },
                {
                    "id": "17743",
                    "lat": "39.58274",
                    "long": "-75.580712",
                    "name": "Delaware City"
                },
                {
                    "id": "44110",
                    "lat": "39.772116",
                    "long": "-75.496785",
                    "name": "Bellefonte"
                },
                {
                    "id": "9015",
                    "lat": "39.714214",
                    "long": "-75.597008",
                    "name": "Newport"
                },
                {
                    "id": "49782",
                    "lat": "39.453638",
                    "long": "-75.657852",
                    "name": "Odessa"
                },
                {
                    "id": "10163",
                    "lat": "39.81057",
                    "long": "-75.488046",
                    "name": "Arden"
                },
                {
                    "id": "121852",
                    "lat": "39.810442",
                    "long": "-75.484155",
                    "name": "Ardentown"
                },
                {
                    "id": "50570",
                    "lat": "39.375863",
                    "long": "-75.638044",
                    "name": "Townsend"
                },
                {
                    "id": "26806",
                    "lat": "39.787032",
                    "long": "-75.569421",
                    "name": "Rockland"
                },
                {
                    "id": "121851",
                    "lat": "39.805395",
                    "long": "-75.485885",
                    "name": "Ardencroft"
                },
                {
                    "id": "55285",
                    "lat": "39.796163",
                    "long": "-75.658848",
                    "name": "Yorklyn"
                },
                {
                    "id": "33804",
                    "lat": "39.554921",
                    "long": "-75.652633",
                    "name": "Saint Georges"
                },
                {
                    "id": "56879",
                    "lat": "39.516934",
                    "long": "-75.576914",
                    "name": "Port Penn"
                }
            ],
            "lat": "39.564148",
            "long": "-75.597202",
            "name": "New Castle"
        }
    ],
    "err": 0
}`

var testHouseResp = `
{
    "data": [
        {
            "address": "6244 Counterfeit Cir.",
            "characteristics": {
                "agency": {
                    "name": "Coldwell Banker",
                    "phone": "800-851-5961"
                },
                "bathrooms": 2,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 261595
            },
            "county": "",
            "lat": 12.20175,
            "long": 31.31965,
            "state": ""
        },
        {
            "address": "9502 Fabricated Cir.",
            "characteristics": {
                "agency": {
                    "name": "Government Auction",
                    "phone": "301-893-4196"
                },
                "bathrooms": 2,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 384928
            },
            "county": "",
            "lat": 12.212250000000001,
            "long": 31.32515,
            "state": ""
        },
        {
            "address": "5836 Fabricated St.",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "214-557-1727"
                },
                "bathrooms": 5,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 235794
            },
            "county": "",
            "lat": 12.192250000000001,
            "long": 31.31865,
            "state": ""
        },
        {
            "address": "1501 Fabricated Way",
            "characteristics": {
                "agency": {
                    "name": "Coldwell Banker",
                    "phone": "214-251-6397"
                },
                "bathrooms": 1,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 314317
            },
            "county": "",
            "lat": 12.216750000000001,
            "long": 31.333650000000002,
            "state": ""
        },
        {
            "address": "4576 Mistake Dr.",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "411-344-8239"
                },
                "bathrooms": 4,
                "bedrooms": 4,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 385656
            },
            "county": "",
            "lat": 12.16125,
            "long": 31.298650000000002,
            "state": ""
        },
        {
            "address": "3761 False Cir.",
            "characteristics": {
                "agency": {
                    "name": "Coldwell Banker",
                    "phone": "214-017-4737"
                },
                "bathrooms": 2,
                "bedrooms": 4,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 218223
            },
            "county": "",
            "lat": 12.17425,
            "long": 31.32065,
            "state": ""
        },
        {
            "address": "1738 Forged Dr.",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "800-163-1215"
                },
                "bathrooms": 1,
                "bedrooms": 2,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 228349
            },
            "county": "",
            "lat": 12.14625,
            "long": 31.31015,
            "state": ""
        },
        {
            "address": "2988 Wrong St.",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "240-909-4365"
                },
                "bathrooms": 4,
                "bedrooms": 2,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 118972
            },
            "county": "",
            "lat": 12.148750000000001,
            "long": 31.32665,
            "state": ""
        },
        {
            "address": "7447 Forged Cir.",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "411-460-3710"
                },
                "bathrooms": 3,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 380555
            },
            "county": "",
            "lat": 12.211,
            "long": 31.3264,
            "state": ""
        },
        {
            "address": "9591 Copied St.",
            "characteristics": {
                "agency": {
                    "name": "Coldwell Banker",
                    "phone": "800-693-0602"
                },
                "bathrooms": 2,
                "bedrooms": 4,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 204106
            },
            "county": "",
            "lat": 12.218,
            "long": 31.3204,
            "state": ""
        },
        {
            "address": "6055 Mistake Dr.",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "240-861-1328"
                },
                "bathrooms": 4,
                "bedrooms": 2,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 208196
            },
            "county": "",
            "lat": 12.1965,
            "long": 31.3209,
            "state": ""
        },
        {
            "address": "9272 Mistake Cir.",
            "characteristics": {
                "agency": {
                    "name": "Coldwell Banker",
                    "phone": "800-955-4272"
                },
                "bathrooms": 2,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 347577
            },
            "county": "",
            "lat": 12.21,
            "long": 31.3319,
            "state": ""
        },
        {
            "address": "5619 False Way",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "240-018-9738"
                },
                "bathrooms": 3,
                "bedrooms": 4,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 201944
            },
            "county": "",
            "lat": 12.200500000000002,
            "long": 31.2889,
            "state": ""
        },
        {
            "address": "7999 Bogus Cir.",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "301-474-6290"
                },
                "bathrooms": 5,
                "bedrooms": 2,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 388866
            },
            "county": "",
            "lat": 12.214500000000001,
            "long": 31.2829,
            "state": ""
        },
        {
            "address": "5180 Fabricated Cir.",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "411-736-5041"
                },
                "bathrooms": 5,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 144546
            },
            "county": "",
            "lat": 12.214500000000001,
            "long": 31.299400000000002,
            "state": ""
        },
        {
            "address": "6797 Wrong Rd",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "240-877-2847"
                },
                "bathrooms": 5,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 284857
            },
            "county": "",
            "lat": 12.218,
            "long": 31.2744,
            "state": ""
        },
        {
            "address": "7626 Phony Cir.",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "800-557-5466"
                },
                "bathrooms": 1,
                "bedrooms": 2,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 189860
            },
            "county": "",
            "lat": 12.18275,
            "long": 31.323900000000002,
            "state": ""
        },
        {
            "address": "8451 Copied Blvd",
            "characteristics": {
                "agency": {
                    "name": "Coldwell Banker",
                    "phone": "800-096-6001"
                },
                "bathrooms": 5,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 302636
            },
            "county": "",
            "lat": 12.18675,
            "long": 31.338900000000002,
            "state": ""
        },
        {
            "address": "1403 False Dr.",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "411-046-2886"
                },
                "bathrooms": 2,
                "bedrooms": 2,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 288547
            },
            "county": "",
            "lat": 12.19025,
            "long": 31.3249,
            "state": ""
        },
        {
            "address": "2360 Mock St.",
            "characteristics": {
                "agency": {
                    "name": "Government Auction",
                    "phone": "877-075-4748"
                },
                "bathrooms": 1,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 140835
            },
            "county": "",
            "lat": 12.174750000000001,
            "long": 31.3409,
            "state": ""
        },
        {
            "address": "9330 Copied Dr.",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "411-663-6340"
                },
                "bathrooms": 4,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 203774
            },
            "county": "",
            "lat": 12.189,
            "long": 31.27315,
            "state": ""
        },
        {
            "address": "7172 Copied St.",
            "characteristics": {
                "agency": {
                    "name": "RE/Max",
                    "phone": "877-083-4312"
                },
                "bathrooms": 1,
                "bedrooms": 2,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 384902
            },
            "county": "",
            "lat": 12.182,
            "long": 31.27465,
            "state": ""
        },
        {
            "address": "7363 Fabricated St.",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "301-892-4288"
                },
                "bathrooms": 1,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 213093
            },
            "county": "",
            "lat": 12.1775,
            "long": 31.268150000000002,
            "state": ""
        },
        {
            "address": "2861 Mock St.",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "240-681-9872"
                },
                "bathrooms": 5,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 178774
            },
            "county": "",
            "lat": 12.185,
            "long": 31.26765,
            "state": ""
        },
        {
            "address": "1317 Help St.",
            "characteristics": {
                "agency": {
                    "name": "Government Auction",
                    "phone": "214-948-2874"
                },
                "bathrooms": 2,
                "bedrooms": 4,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 328322
            },
            "county": "",
            "lat": 12.17075,
            "long": 31.28565,
            "state": ""
        },
        {
            "address": "1600 Wrong Dr.",
            "characteristics": {
                "agency": {
                    "name": "Government Auction",
                    "phone": "214-648-8665"
                },
                "bathrooms": 5,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 220180
            },
            "county": "",
            "lat": 12.17525,
            "long": 31.28565,
            "state": ""
        },
        {
            "address": "8413 Phony Way",
            "characteristics": {
                "agency": {
                    "name": "Coldwell Banker",
                    "phone": "301-822-2543"
                },
                "bathrooms": 5,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 320721
            },
            "county": "",
            "lat": 12.17375,
            "long": 31.28665,
            "state": ""
        },
        {
            "address": "1768 Sham St.",
            "characteristics": {
                "agency": {
                    "name": "Coldwell Banker",
                    "phone": "800-298-3874"
                },
                "bathrooms": 2,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 387351
            },
            "county": "",
            "lat": 12.17275,
            "long": 31.30065,
            "state": ""
        },
        {
            "address": "1807 Bogus Rd",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "301-843-9108"
                },
                "bathrooms": 3,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 324265
            },
            "county": "",
            "lat": 12.171750000000001,
            "long": 31.3454,
            "state": ""
        },
        {
            "address": "3972 Mistake Rd",
            "characteristics": {
                "agency": {
                    "name": "Government Auction",
                    "phone": "240-284-5915"
                },
                "bathrooms": 5,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 221172
            },
            "county": "",
            "lat": 12.18425,
            "long": 31.3479,
            "state": ""
        },
        {
            "address": "7691 Bogus Cir.",
            "characteristics": {
                "agency": {
                    "name": "Coldwell Banker",
                    "phone": "301-944-8001"
                },
                "bathrooms": 4,
                "bedrooms": 3,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 186175
            },
            "county": "",
            "lat": 12.180250000000001,
            "long": 31.3274,
            "state": ""
        },
        {
            "address": "7114 Fake Dr.",
            "characteristics": {
                "agency": {
                    "name": "Government Auction",
                    "phone": "411-387-3375"
                },
                "bathrooms": 1,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 312134
            },
            "county": "",
            "lat": 12.17825,
            "long": 31.3229,
            "state": ""
        },
        {
            "address": "3916 False St.",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "411-539-2662"
                },
                "bathrooms": 1,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 374424
            },
            "county": "",
            "lat": 12.19875,
            "long": 31.28265,
            "state": ""
        },
        {
            "address": "6022 Fake St.",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "240-202-5184"
                },
                "bathrooms": 4,
                "bedrooms": 1,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 201653
            },
            "county": "",
            "lat": 12.17075,
            "long": 31.30115,
            "state": ""
        },
        {
            "address": "1449 Fabricated Rd",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "800-288-3976"
                },
                "bathrooms": 5,
                "bedrooms": 2,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 342513
            },
            "county": "",
            "lat": 12.17525,
            "long": 31.280150000000003,
            "state": ""
        },
        {
            "address": "8201 Bogus Cir.",
            "characteristics": {
                "agency": {
                    "name": "Pinnacle real estate",
                    "phone": "411-937-2338"
                },
                "bathrooms": 2,
                "bedrooms": 2,
                "population": "65239",
                "populationDenisty": "2966.7",
                "price": 170360
            },
            "county": "",
            "lat": 12.198250000000002,
            "long": 31.28115,
            "state": ""
        }
    ],
    "err": 0
}
`

testLocationData = `{"state":"Maryland","county":"Baltimore","city":"","lat":39.25560152079427,"long":-76.71099543571474}`

testAmenityData = `{
    "data": {
        "bike_paths": [
            {
                "image": "https://s3-media3.fl.yelpcdn.com/bphoto/2w2HcrMFffM0-1gsxw_-Yg/o.jpg",
                "lat": 39.288734,
                "long": -76.782778,
                "name": "Patapsco Valley State Park",
                "phone": "+14104615005",
                "title": "N/A",
                "type": "bike_paths"
            },
            {
                "image": "https://s3-media3.fl.yelpcdn.com/bphoto/ZTq8lAm1ajifNHM8XZaLbg/o.jpg",
                "lat": 39.1997604,
                "long": -76.6556702,
                "name": "BWI Bike Trail",
                "phone": "",
                "title": "N/A",
                "type": "bike_paths"
            },
            {
                "image": "https://s3-media3.fl.yelpcdn.com/bphoto/QkcmcGmE6EZk_b1sIlyjpA/o.jpg",
                "lat": 39.2215092480183,
                "long": -76.7048913985491,
                "name": "Patapsco State Park - Avalon Area",
                "phone": "+14104615005",
                "title": "N/A",
                "type": "bike_paths"
            },
            {
                "image": "https://s3-media1.fl.yelpcdn.com/bphoto/7zB9YKC4uLHPr-4-2NPaNQ/o.jpg",
                "lat": 39.22104,
                "long": -76.75972,
                "name": "Rockburn Branch Park",
                "phone": "+14103134700",
                "title": "N/A",
                "type": "bike_paths"
            },
            {
                "image": "https://s3-media2.fl.yelpcdn.com/bphoto/uBw5XHVH3p21LyAJpfEd5g/o.jpg",
                "lat": 39.2474881486047,
                "long": -76.7429197579622,
                "name": "Patapsco State Tire Park",
                "phone": "",
                "title": "N/A",
                "type": "bike_paths"
            },
            {
                "image": "https://s3-media1.fl.yelpcdn.com/bphoto/sKLM-nPgkH7YZ87y_J8ffQ/o.jpg",
                "lat": 39.3044281005859,
                "long": -76.6885604858398,
                "name": "Gwynns Falls Trail",
                "phone": "+14104485663",
                "title": "N/A",
                "type": "bike_paths"
            },
            {
                "image": "https://s3-media3.fl.yelpcdn.com/bphoto/SWKR5lKP4R1FdFm0utLkTg/o.jpg",
                "lat": 39.162308,
                "long": -76.663492,
                "name": "Thomas A Dixon Jr Aircraft Observation Park",
                "phone": "",
                "title": "N/A",
                "type": "bike_paths"
            },
            {
                "image": "https://s3-media4.fl.yelpcdn.com/bphoto/WRpIW1BBGgFhhmWAJe2yTg/o.jpg",
                "lat": 39.1354962064318,
                "long": -76.8271554389007,
                "name": "Terrapin Adventures",
                "phone": "+13017251313",
                "title": "N/A",
                "type": "bike_paths"
            }
        ]
    },
    "err": 0
}`
