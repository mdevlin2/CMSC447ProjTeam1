function addFavs() {
    var favTable = document.getElementById("favTable");
    var stateFilter = document.getElementById("filterState");
    var houseStr = localStorage.getItem("savedHouses");
    var posInfo = localStorage.getItem("posInfo");

    posInfo = posInfo.replace("[", "");
    posInfo = posInfo.replace("]", "");
    posInfo = posInfo.replace("\"{", "{");
    posInfo = posInfo.split("\",\"");

    if (houseStr == "[]") {
        stateFilter.innerHTML = "<option value=\"ALL\">Select State</option>";
        favTable.innerHTML += 
                "<tr>\n<th style=\"color:black; font-size: 18px;\">None</th>\
                <th style=\"color:black; font-size: 18px;\">None</th>\
                <th><button id=\"deletebutton\">\
                <img src=\"http://localhost:8000/images/deleteFavIcon.jpg\"></button></th>\n</tr>";
    }
    else {
        var str = houseStr.replace("[{", "");
        str = str.split("},{");
        if (str != undefined) {
            var i;
            var re = new RegExp('"address":"[^,]*"')
            for (i = 0; i < str.length; i++) {
                var searchExp = re.exec(str[i]);
                searchExp = searchExp.toString();
                searchExp = searchExp.replace('\"address\":\"', '');
                searchExp = searchExp.replace('\"', '');

                posInfo[i] = posInfo[i].replace(/{/g, "");
                posInfo[i] = posInfo[i].replace(/}/g, "");
                posInfo[i] = posInfo[i].replace(/"/g, "");
                var arr = posInfo[i].split(", ");
                
                var pos = arr[2].search("name");
                arr[2] = arr[2].slice(pos, arr[2].length - 1);
                arr[2] = arr[2].replace("name\\:\\", "");


                favTable.innerHTML += 
                "<tr id=\"" + i + "\">\n<th><a href=\"http://localhost:8000/map.html\">"+searchExp+", "+arr[2]+", "+arr[0]+"</a>\
                </th>\n<th>Agency</th>\n\
                <th><button id=\"deletebutton\" onclick=\"return deleteFav("+ i +")\">\
                <img src=\"http://localhost:8000/images/deleteFavIcon.jpg\"></button></th></tr>\n";
            }
        }
    }
    return false;
}

function deleteFav(id) {
    var houseStr = localStorage.getItem("savedHouses");
    var posInfo = localStorage.getItem("posInfo");
    var fav = document.getElementById(id);
    fav.parentNode.removeChild(fav);

    houseStr = houseStr.replace("[", "");
    houseStr = houseStr.replace("]", "");
    var houseArr = houseStr.split("},{");
    for (var i = 0; i < houseArr.length; i++) {
        if (i == 0) 
            houseArr[i] = houseArr[i] + "}";
        else 
            houseArr[i] = "{" + houseArr[i];   
    }
    if (id == 0) {
        houseArr.shift();
    }
    else {
        var index = houseArr.indexOf(houseArr[id]);
        if (index > -1) {
            houseArr.splice(index, 1);
        }
    }
    var str = "";
    for (i = 0; i < houseArr.length; i++) {
        if (i != houseArr.length - 1) 
            str += houseArr[i] + ",";
        else
            str += houseArr[i];
    }
    str = "[" + str + "]";
    localStorage.setItem("savedHouses", str);

    return false;
}

function filterFavs() {
    var filterState = document.getElementById("filterState");
    var favTable = document.getElementById("favTable");

    favTable.innerHTML = "<tr>\
        <th>Listings</th>\
        <th>Agencies</th>\
        <th></th>\
        </tr>";
    addFavs();

    var pos = favTable.innerHTML.search("<tbody><tr id=");
    var str = favTable.innerHTML;
    var beginStr = str.slice(0, pos);
    str = str.slice(pos, -1);
    var arr = str.split("</tbody><tbody>");

    for (var i = 0; i < arr.length; i++) {
        if (i == 0) {
            arr[i] += "</tbody>";
        }
        else if (i == arr.length-1) {
            arr[i] = "<tbody>" + arr[i] + ">";;
        }
        else {
            arr[i] = "<tbody>" + arr[i] + "</tbody>";
        }
    }

    if (filterState.value == "MD") {
        var str = beginStr;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].search("Maryland") != -1) {
                str += arr[i];
            }
        }
        favTable.innerHTML = str;
        console.log("MD");
    }
    else if (filterState.value == "DE") {
        var str = beginStr;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].search("Delaware") != -1) {
                str += arr[i];
            }
        }
        favTable.innerHTML = str;
        console.log("DE");
    }
    else {
        console.log("ALL");
    }

    return false;
}