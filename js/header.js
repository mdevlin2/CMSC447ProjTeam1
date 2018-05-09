function makeHeader(link, name){
  var entry = document.createElement("li")
  var ref = document.createElement("a")
  ref.href = link
  ref.innerHTML = name
  entry.appendChild(ref)


  return entry
}

function addHome(){
  var home = makeHeader(getHomeLink(), "Home")
  var header = document.getElementById("navList")
  header.appendChild(home)
}

function addMap(){
  var map = makeHeader(getMapLink(), "Map")
  var header = document.getElementById("navList")
  header.appendChild(map)
}

function addFavorites(){
  var favorite = makeHeader(getFavoritesLink(), "Favorites")
  var header = document.getElementById("navList")
  header.appendChild(favorite)
}
