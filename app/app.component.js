"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var detalle_service_1 = require('./services/detalle/detalle.service');
var GoogleMapComponent = (function () {
    function GoogleMapComponent(_detalleService) {
        this._detalleService = _detalleService;
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        this.loadMap();
    };
    GoogleMapComponent.prototype.loadMap = function () {
        var bogota = new google.maps.LatLng(4.710988599999999, -74.072092);
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: bogota,
            zoom: 4
        });
        this.miEvento();
    };
    GoogleMapComponent.prototype.miEvento = function () {
        var _this = this;
        this.map.addListener('click', function (event) {
            var localitation = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'location': localitation }, function (result, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    _this._detalleService.getMap(result[0].address_components).then(function (mapas) {
                        var arr = Object.keys(mapas).map(function (k) { return mapas[k]; });
                        console.log(arr);
                    });
                }
            });
        });
    };
    GoogleMapComponent.prototype.post = function () {
        console.log('servo');
    };
    GoogleMapComponent = __decorate([
        core_1.Component({
            selector: 'app',
            styleUrls: ['app/app.css'],
            templateUrl: 'app/app.html',
            providers: [detalle_service_1.DetalleService]
        }), 
        __metadata('design:paramtypes', [detalle_service_1.DetalleService])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());
exports.GoogleMapComponent = GoogleMapComponent;
//# sourceMappingURL=app.component.js.map