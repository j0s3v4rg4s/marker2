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
/* beautify ignore:start */
var core_1 = require('@angular/core');
/* beautify ignore:end */
var DetalleService = (function () {
    function DetalleService() {
        this.array_information = {};
        this.array_information['street_address'] = 'Streer addres';
        this.array_information['route'] = 'Route';
        this.array_information['postal_code'] = 'Postal code';
        this.array_information['sublocality_level_5'] = 'Sublocality 5';
        this.array_information['sublocality_level_4'] = 'Sublocality 4';
        this.array_information['sublocality_level_3'] = 'Sublocality 3';
        this.array_information['sublocality_level_2'] = 'Sublocality 2';
        this.array_information['sublocality_level_1'] = 'Sublocality 1';
        this.array_information['locality'] = 'Locality 5';
        this.array_information['administrative_area_level_5'] = 'Area level 5';
        this.array_information['administrative_area_level_4'] = 'Area level 4';
        this.array_information['administrative_area_level_3'] = 'Area level35';
        this.array_information['administrative_area_level_2'] = 'Area level 2';
        this.array_information['administrative_area_level_1'] = 'Area level 1';
        this.array_information['country'] = 'Country';
    }
    DetalleService.prototype.setInfo = function (p_array) {
        var mapa = {};
        for (var _i = 0, p_array_1 = p_array; _i < p_array_1.length; _i++) {
            var comp = p_array_1[_i];
            /*if (this.array_information[comp.types[0]]) {
                this.mapa[comp.types[0]] = new Data(this.array_information[comp.types[0]], comp.long_name);
            }*/
            if (this.array_information[comp.types[0]]) {
                mapa[comp.types[0]] = new Data(this.array_information[comp.types[0]], comp.long_name);
            }
        }
        return mapa;
    };
    DetalleService.prototype.getMap = function (p_array) {
        return Promise.resolve(this.setInfo(p_array));
    };
    DetalleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DetalleService);
    return DetalleService;
}());
exports.DetalleService = DetalleService;
var Data = (function () {
    function Data(l, v) {
        this.label = l;
        this.value = v;
    }
    return Data;
}());
//# sourceMappingURL=detalle.service.js.map