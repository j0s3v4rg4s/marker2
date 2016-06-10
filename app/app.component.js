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
var GoogleMapComponent = (function () {
    function GoogleMapComponent() {
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
        this.map.addListener('click', function (event) {
            document.getElementById("content").innerHTML = "whatever";
        });
    };
    GoogleMapComponent.prototype.post = function () {
        console.log('servo');
    };
    GoogleMapComponent = __decorate([
        core_1.Component({
            selector: 'app',
            styleUrls: ['app/app.css'],
            templateUrl: 'app/app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());
exports.GoogleMapComponent = GoogleMapComponent;
//# sourceMappingURL=app.component.js.map