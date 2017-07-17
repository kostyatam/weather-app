//const URL = 'http://api.openweathermap.org/data/2.5/';
const URL = '/api/';
const APIKEY = '60da67f96c23c27e9c43509ceca88e7c';

class GetWeather {
    constructor () {
        this.byCoords = this.byCoords.bind(this);
        this.byId = this.byId.bind(this);
        this.byIds = this.byIds.bind(this);
        this.parseResult = this.parseResult.bind(this);
    }

    parseResult (res) {
        const weather = {};
        weather.temp = res.main.temp.toFixed(0);
        weather.humidity = res.main.humidity.toFixed(0);
        weather.wind = res.wind.speed.toFixed(0);
        weather.name = res.name;
        weather.country = res.sys.country;
        weather.id = res.id;
        weather.lastUpdate = Date.now();
        weather.description = res.weather[0].description;
        weather.icon = this.getIcon(res.weather[0].id);

        return weather;
    }

    getIcon (code) {
        code = parseInt(code);

        if (code < 300) {
            return 'thunderstorm';
        }

        if (code < 600) {
            return 'rain';
        }

        if (code < 800) {
            return 'fog';
        }

        if (code === 800) {
            return 'sun';
        }

        if (code < 900) {
            return 'cloudy';
        }

        return 'n/a';
    }

    byCoords ({lat, lon}) {
        return fetch(`${URL}weather?units=metric&lat=${lat}&lon=${lon}&APPID=${APIKEY}`)
        .then(res => res.json())
        .then(this.parseResult);
    }

    byId (id) {
        return fetch(`${URL}weather?units=metric&id=${id}&APPID=${APIKEY}`)
        .then(res => res.json())
        .then(this.parseResult);
    }

    byIds (id) {
        return fetch(`${URL}group?units=metric&id=${id.join(',')}&APPID=${APIKEY}`)
        .then(res => res.json())
        .then(list => list.map(this.parseResult));
    }
}

export default new GetWeather();