//const URL = 'http://api.openweathermap.org/data/2.5/find?&type=like';
const URL = '/api';
const APIKEY = '60da67f96c23c27e9c43509ceca88e7c';

class Search {
    constructor () {
        this.getCitiesList = this.getCitiesList.bind(this);
    }
    parseResult (res) {
        return Promise
        .resolve(res.json())
        .then(res => {
            console.log(res);
            if (res.cod !== '200') {
                return [];
            };

            return res.list.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    country: item.sys.country
                }
            })
        })
    }
    getCitiesList (query) {
        return fetch(`${URL}/find?&type=like&q=${query}&APPID=${APIKEY}`)
        .then(this.parseResult);
    }
}

export default new Search;