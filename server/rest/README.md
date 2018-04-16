<h1> REST API's for Zillow and Yelp </h1>
Zillow:
  GET /cities?state=""&county=""
  will return:
  {
    data: [
      {
        "id": zillow id, will need for property search
        "name": name of city
      }, ...
    ]
    err: if any error occurs, this is where to check
  }
  
