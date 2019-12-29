var platform = new H.service.Platform({
    'apikey': 'lOUdcXSettyfbe4DVCvQT8x1NVDPjXYK6jrqM7vcdoQ'
  });

  // Obtain the default map types from the platform object:

function landmarkGeocode() {
    let title = document.querySelector('h1').textContent;
    let geocoder = platform.getGeocodingService(),
      landmarkGeocodingParameters = {
        searchtext: title,
        jsonattributes : 1
      };
  
    geocoder.search(
      landmarkGeocodingParameters,
      showMap,
      (e) =>{
          console.log(e)
      }
    );
  }

function showMap(result){
    let location = result.response.view[0].result[0].location.displayPosition;

    let defaultLayers = platform.createDefaultLayers();

    let map = new H.Map(
        document.querySelector('.map'),
        defaultLayers.vector.normal.map,
        {
          zoom: 15,
          center: { lat: location.latitude, lng: location.longitude }
        });

        var marker = new H.map.Marker({lat:location.latitude, lng:location.longitude});
        map.addObject(marker);

        let ui = H.ui.UI.createDefault(map, defaultLayers);
}

landmarkGeocode()
