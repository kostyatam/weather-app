import { APIKEY, UPDATE_WEATHER } from './constants';

export const init = () => (dispatch, getState) => {
    const geo = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });

    geo
    .then(position => {
        const {latitude, longitude} = position.coords;
        return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}`)
        .then(res => res.json());
    })
    .then(res => {
        const weather = {};
        weather.temp = (res.main.temp - 273.15).toFixed(0);
        weather.name = res.name;
        weather.country = res.sys.country;
        weather.id = res.id;

        dispatch(updateWeather(weather));
    })
}

export const updateWeather = (data) => {
    return {
        type: UPDATE_WEATHER,
        data
    }
}