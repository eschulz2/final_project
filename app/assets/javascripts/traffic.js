function initialize() {
  var myLatlng = new google.maps.LatLng(41.889911, -87.637657);
  var mapOptions = {
    zoom: 13,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
