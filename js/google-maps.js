const europe = {lat: 50.8396322, lng: 4.3844799};
const international = {lat: 52.3503593, lng: 4.8326501};

const europeBtn = $("#europa-btn")
const internacionalBtn = $("#internacional-btn")


let map;
let europeMarker;
let internationalMarker;

function initMap() {
    // The location of Uluru
    // The map, centered at Uluru
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: europe});
    // The marker, positioned at Uluru
    europeMarker = new google.maps.Marker({position: europe, map: map});
    internationalMarker = new google.maps.Marker({position: international, map: map});

    europeBtn.click(function(){
        console.log("HELL")
        move(europe)
    })

    internacionalBtn.click(function(){
        console.log("HELL")
        move(international)
    })
  }
  
function move(coords){
    map.setZoom(18)
    map.setCenter(coords)
}

initMap()

