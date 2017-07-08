import { UPDATE_WEATHER } from './constants';
import { geo, getWeather } from 'utils';

export const init = () => (dispatch, getState) => {
    geo.getCurrentPosition()
    .then(getWeather.byCoords)
    .then(weather => dispatch(updateWeather(weather)));
}

export const updateWeather = (data) => {
    return {
        type: UPDATE_WEATHER,
        data
    }
}