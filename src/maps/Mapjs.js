function initMap()
{
	var location = {
		lat: -34.397,
		lng: 150.644
	}
	
	var options = {
		center: location,
		zoom: 9
	}
	
	var map = new google.maps.Map(document.getElementById("map"),options);
	
	var directionsService = new google.maps.DirectionsService(),
		directionsDisplay = new google.maps.DirectionsRenderer();
	
	
	function calcRoute(des)
	{
		var travel = {
		origin : (des.coords)? new google.maps.LatLng(des.lat, des.lng) : des.address,
		destination :"Wollongong,Australia",
		travelMode : google.maps.DirectionsTravelMode.DRIVING
		},
		
		map = new google.maps.Map(document.getElementById("map"),options);
		directionsDisplay.setMap(map);
		
		directionsService.route(travel, function (result, status){
			if (status === google.maps.DirectionsStatus.OK) 
			{
				const output = document.querySelector('#output');
				output.innerHTML = "Thank you for your patience. <br> Professional will be at the requested location in " +result.routes[0].legs[0].duration.text;
				directionsDisplay.setDirections(result);
			}
		});
	}
		
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(function (position){
			calcRoute({
				coords:true,
				lat:position.coords.latitude,
				lng:position.coords.longitude
			})
		})
	}
	else
	{
		map = new google.maps.Map(document.getElementById("map"),options);
	}
}
