import {Component, OnInit} from '@angular/core';



declare var google: any;

@Component({
  selector: 'app',
  styleUrls: ['app/app.css'],
  templateUrl: 'app/app.html'
})
export class GoogleMapComponent implements OnInit {
  map;

  constructor() {

  }
  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    let bogota = new google.maps.LatLng(4.710988599999999, -74.072092);
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: bogota,
      zoom: 4
    });
    this.miEvento();
  }

  miEvento() {
    this.map.addListener('click', (event) => {
      document.getElementById("content").innerHTML = "whatever";
    });
  }

  post() {
    console.log('servo');
  }

}
