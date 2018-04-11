
function searchState() {
    var stateSel = document.getElementById("stateSelect");
    var val = document.getElementById("state").value;
    var md = document.getElementById("MDc");
    var de = document.getElementById("DEc");
    var mdCity = document.getElementById("cityMD");
    var deCity = document.getElementById("cityDE");
    var submitb = document.getElementById("submitbutton");
    var finalsearch = document.getElementById("finalsearch");

    if(val == "MD") {
        de.style.display = "none";
        md.style.display = "inline-block";
        deCity.style.display = "none";
        mdCity.style.display = "inline-block";
        stateSel.innerHTML = "<h1>State: Maryland<h1>";
        //md.insertAdjacentHTML("beforeend", "<br><br><br><br><br>");
    }
    else if (val == "DE") {
        de.style.display = "inline-block";
        md.style.display = "none";   
        deCity.style.display = "inline-block";
        mdCity.style.display = "none";
        stateSel.innerHTML = "<h1>State: Delaware<h1>";
        //de.insertAdjacentHTML("beforeend", "<br><br><br><br><br>");
    }
    submitb.style.display = "none";
    finalsearch.style.display = "inline-block";
    return false;
}

function searchMap() {
    window.location = "http://localhost:8000/map.html";
    return false;
}