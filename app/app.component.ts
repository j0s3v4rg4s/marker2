import {Component, OnInit} from '@angular/core';
import {DetalleService} from './services/detalle/detalle.service';


declare var google: any;

@Component({
    selector: 'app',
    styleUrls: ['app/app.css'],
    templateUrl: 'app/app.html',
    providers: [DetalleService]
})
export class GoogleMapComponent implements OnInit {
    map;

    constructor(private _detalleService: DetalleService) {

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
            let localitation = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());

            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'location': localitation }, (result, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    this._detalleService.getMap(result[0].address_components).then(mapas => {
                        let arr = Object.keys(mapas).map(function(k) { return mapas[k]; });
                        console.log(arr);
                    });
                }
            });
        });
    }

    post() {
        console.log('servo');
    }

}
