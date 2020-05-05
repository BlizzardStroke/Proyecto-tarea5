import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";

declare var google;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private geolocation: Geolocation
    ) {

  } 

  ngOnInit(){
    this.loadMap();
  }


  async loadMap(){
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    // console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    // creamos el mapa a partir de ahora
    const map = new google.maps.Map(mapEle, {
      center: myLatLng, // mis coordenadas
      zoom: 12 // el zoom inicial del mapa
    });
  }



}
