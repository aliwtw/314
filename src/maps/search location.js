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
	
	autocomplete = new google.maps.places.Autocomplete(document.getElementById("destination"),
	{
		fields:['geometry','name']
	});
	
	autocomplete.addListener("place_changed", () => {
		const place = autocomplete.getPlace();	
		new google.maps.Marker({
			position: place.geometry.location,
			title: place.name,
			map: map
		})
	});
}