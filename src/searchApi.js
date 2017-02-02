import * as $ from 'jquery';

const googleKey = 'AIzaSyBFiJ_sVVsr5KFQzp7yWbletUoGtmxk_Zk';

const codeKey = '2f6ea392-b349-45c7-bc6f-452e7fda95a0';

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

    static getAirports(query) {
        return $.ajax('https://iatacodes.org/api/v4/autocomplete.jsonp?api_key=' + codeKey + '&query=' + query, {dataType: 'jsonp'}).then(function (data) {
           return data.response;
        });

    }

}

export default SearchApi;