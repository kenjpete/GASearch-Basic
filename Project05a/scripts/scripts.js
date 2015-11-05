// Wait for Cordova to load

document.addEventListener("deviceready", onDeviceReady, false);


// Cordova is ready

   

function onDeviceReady() {
    // window.open = cordova.InAppBrowser.open;



    $("#btnSearch").click(function () {
        var searchTXT = document.getElementById("txtSearch").value;
        var URL = 'https://cse.google.com/cse/publicurl?cx=010646117115720095894:jlwrtvhovry&q=';
        var searchURL = URL + searchTXT;
        var iabRef = window.open(encodeURI('searchURL'), '_blank', 'location=yes');
    });
}


    function startOver() {
        var txtSearch = document.getElementById("txtSearch").value = "";
    }
