/* beautify ignore:start */
import {Injectable} from '@angular/core';
/* beautify ignore:end */

@Injectable()
export class DetalleService {
    array_information: MapInfo = {};

    constructor() {
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



    setInfo(p_array) {
        let mapa: MapData = {};
        for (let comp of p_array) {
            /*if (this.array_information[comp.types[0]]) {
                this.mapa[comp.types[0]] = new Data(this.array_information[comp.types[0]], comp.long_name);
            }*/
            if (this.array_information[comp.types[0]]) {
                mapa[comp.types[0]] = new Data(this.array_information[comp.types[0]], comp.long_name);
            }
        }
        return mapa;
    }

    getMap(p_array) {
        return Promise.resolve(this.setInfo(p_array));
    }

}

export interface MapData {
    [name: string]: Data;
}

interface MapInfo {
    [name: string]: string;
}

class Data {
    label: string;
    value: string;
    constructor(l: string, v: string) {
        this.label = l;
        this.value = v;
    }
}
