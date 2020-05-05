import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  map = null;

  markers: Marker[] = [
    {
      position: {
        lat: 25.686613,
        lng: -100.316116,
      },
      title: 'Centro Monterrey'
    },
    {
      position: {
        lat: 25.675497298,
        lng: -100.35249859,
      },
      title: 'Galerias Monterrey'
    },
    {
      position: {
        lat: 25.7416706,
        lng: -100.3022232,
      },
      title: 'San Nicolas'
    },
    {
      position: {
        lat: 25.657345,
        lng: -100.40175,
      },
      title: 'San Pedro'
    },
    {
      position: {
        lat: 25.1128,
        lng: -99.7755,
      },
      title: 'San Pedro'
    },
  ];

  constructor(private geolocation:Geolocation) {}

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    const rta = await this.geolocation.getCurrentPosition();
    
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {
      lat: rta.coords.latitude, 
      lng: rta.coords.longitude
    };
    // vemos nuestras coordenadas en consola
    console.log(myLatLng);
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
      streetViewControl: false,
      fullScreenControl: false
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      // const marker = {
        this.renderMarkers();
      //   position: {
      //     lat: 4.658383846282959,
      //     lng: -74.09394073486328
      //   },
      //   title: 'punto uno'
      // };
      // this.addMarker(marker);
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}
