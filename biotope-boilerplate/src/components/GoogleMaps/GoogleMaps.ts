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
        styles: [
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.local",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
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
