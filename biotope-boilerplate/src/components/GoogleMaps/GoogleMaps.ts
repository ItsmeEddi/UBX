import Component from '@biotope/element';
import template from './template';
declare var google

interface GoogleMapsProps {

}

interface GoogleMapsState {

}

class GoogleMaps extends Component< GoogleMapsProps, GoogleMapsState > {
    static componentName = 'google-maps';

    connectedCallback() {
        this.initMap();
    }

    initMap() {
      let position = {lat: 48.096950, lng: 11.545200};

      let map = new google.maps.Map(this.shadowRoot.getElementById('google-maps'), {
        center: position,
        zoom: 15,
        disableDefaultUI: true,
        styles: [ { "elementType": "geometry", "stylers": [ { "color": "#050e3f" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#fafafa" }, { "visibility": "off" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [ { "color": "#333333" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#050e3f" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#2a325c" } ] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [ { "color": "#ffffff" }, { "visibility": "off" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#050e3f" } ] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#87e802" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#050e3f" }, { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#050e3f" } ] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "geometry", "stylers": [ { "color": "#264eff" }, { "visibility": "off" } ] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "transit.station", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#264eff" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "color": "#333333" } ] } ]
      });

      let marker = new google.maps.Marker({
        position: position,
        map: map,
        title: 'Virtual Identity AG München'
      });
    }

    render() {
        return template(this.html, {});
    }
}

export default GoogleMaps;
