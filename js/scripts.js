function toggleNav() {
    var mobileNav = document.getElementById('mobilenav');
    var menu = document.getElementById('menu');
    // if class hidden, set class showing, else set class hidden
    if(mobileNav.className == "container hidden") {
        mobileNav.className = "container showing";
        menu.innerHTML = "skjul meny";
    }
    else {
        mobileNav.className = "container hidden";
        menu.innerHTML = "meny"
    }
}


function showMap() {
    var mapDiv = document.getElementById('g_spot');
    var text = document.getElementById('mapToggleText');
    if(mapDiv.className == "hide") {
        mapDiv.className = "show";
        text.innerHTML = "skjul kart"
        googleMaps();
    }
    else {
        mapDiv.className = "hide"
        text.innerHTML = "vis kart"
    }
}

function googleMaps() {
    var latLng = {
        lat: 64.1199624
        , lng: 11.4061595
    };
    var mapCanvas = document.getElementById('g_spot');
    var mapOptions = {
        center: new google.maps.LatLng(latLng)
        , zoom: 10
        , scrollwheel: false
        , mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: latLng
        , map: map
        , title: 'Ulstad Gård'
    });
    /* var directionsService = new google.maps.DirectionsService();
     var directionsDisplay = new google.maps.DirectionsRenderer();
     directionsDisplay.setMap(map);
     directionsDisplay.setPanel8d*/

}
