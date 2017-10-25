$(document).ready(function(){
	$('#pages1').click(function() {
		name("bob");
	});

});

function name(xyz){
	alert(xyz);

}
var map;

function initialize() {
 
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8666, lng: 151.1958},
    zoom: 15
  });

  var request = {
    location: map.getCenter(),
    radius: '500',
    query: 'Google Sydney'
  };

  var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}


function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var marker = new google.maps.Marker({
      map: map,
      place: {
        placeId: results[0].place_id,
        location: results[0].geometry.location
      }
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);