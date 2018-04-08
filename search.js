function searchState() {
    var val = document.getElementById("state");
    var md = document.getElementById("DEc");
    var de = document.getElementById("MDc");
    var b = document.getElementById("b");
    b.innerHTML = "<p>Test</p>";
    if(val == "MD") {
        de.style.display = "none";
        md.style.display = "inline";
    }
    else if (val == "DE") {
        val.value = "DE";
        de.style.display = "inline";
        md.style.display = "none";   
    }
};