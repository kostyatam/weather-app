const URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&';
const APIKEY = '60da67f96c23c27e9c43509ceca88e7c';

class GetWeather {
    constructor () {
        this.byCoords = this.byCoords.bind(this);
        this.byId = this.byId.bind(this);
    }

    parseResult (res) {
        const weather = {};
        weather.temp = res.main.temp.toFixed(0);
        weather.name = res.name;
        weather.country = res.sys.country;
        weather.id = res.id;

        return weather;
    }

    byCoords ({lat, lon}) {
        return fetch(`${URL}lat=${lat}&lon=${lon}&APPID=${APIKEY}`)
        .then(res => res.json())
        .then(this.parseResult);
    }

    byId (id) {
        return fetch(`${URL}id=${id}&APPID=${APIKEY}`)
        .then(res => res.json())
        .then(this.parseResult);
    }
}

export default new GetWeather();