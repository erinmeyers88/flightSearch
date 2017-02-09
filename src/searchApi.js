import * as $ from 'jquery';

const googleKey = 'AIzaSyCLy1g4X0EEiDvTSVQVZMghrWUC-noJoeE';

const placeKey = 'AIzaSyCLy1g4X0EEiDvTSVQVZMghrWUC-noJoeE';
const codeKey = '2f6ea392-b349-45c7-bc6f-452e7fda95a0';

const affliateToken = 'f4ac21c0a56e1e0a8414d88e5ff9ba65';

class SearchApi {

    static flightSearch(searchBody) {
        return fetch('https://www.googleapis.com/qpxExpress/v1/trips/search?key=' + googleKey, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:  JSON.stringify(searchBody)
        }
        ).then((data) => {
            return data.json()
        });
    }

    static getAirportData() {
        return $.ajax('http://api.travelpayouts.com/data/airports.json?token=' + affliateToken
        ).then((data) => {
            return data;
        });
    }

    static getAirports(query) {
        // return $.ajax('https://iatacodes.org/api/v4/autocomplete.jsonp?api_key=' + codeKey + '&query=' + query, {dataType: 'jsonp'}).then(function (data) {
        //    return data.response;
        // });

        return fetch('https://iatacodes.org/api/v4/autocomplete.jsonp?api_key=' + codeKey + '&query=' + query, {mode: 'no-cors'}).then(function () {
            return $.ajax('https://iatacodes.org/api/v4/autocomplete.jsonp?api_key=' + codeKey + '&query=' + query, {dataType: 'jsonp'}).then(function (data) {
               return data.response;
            });
        });
    }

    static getRoutes(query) {
        return $.ajax('https://iatacodes.org/api/v4/routes.jsonp?api_key=' + codeKey + '&arrival=' + query, {dataType: 'jsonp'}).then(function (data) {
            return data.response;
        });
    }


    static getAllRoutes(query) {
        return $.ajax('https://iatacodes.org/api/v4/routes.jsonp?api_key=' + codeKey, {dataType: 'jsonp'}).then(function (data) {
            return data.response;
        });
    }


}

export default SearchApi;