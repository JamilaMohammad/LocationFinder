var map;

function initMap() {
    console.log("inside function")
    var mapOptions = {
        center: {
            lat: -30.397,
            lng: 30.644
        },
        zoom: 13,
        // zoomControl: true,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // scaleControl: true,
        // streetViewControl: true,
        // rotateControl: true,
        // fullScreenControl:true
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: {
            lat: -30.397,
            lng: 30.644
        },
        title: "my Location",
        // label:'A'
    });
    marker.setMap(map);
    //create a polyline
    //var sequence of coordinates array
    // var polieLinePaths = new google.maps.Marker({
    //      path: arrayOfSequenceCorodinates
    //      geodesic: true,
    //      strokeColor: '#FF000'
    //      strokeOpacity: 1.0,
    //      strokeWeight: 2
    // });
    // polieLinePaths.setMap(map)
}


function onClick() {
    console.log("Inside the clicked button")
    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
}