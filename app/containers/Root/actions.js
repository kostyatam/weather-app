import { UPDATE_WEATHER, REMOVE_FROM_UPDATE, ADD_TO_UPDATE} from './constants';
import { geo, getWeather } from 'utils';

export const init = () => (dispatch, getState) => {
    geo.getCurrentPosition()
    .then(getWeather.byCoords)
    .then(weather => dispatch(updateWeather(weather)));
    getList();
}

export const updateWeather = (data) => {
    return {
        type: UPDATE_WEATHER,
        data
    }
}

export const getList = () => (dispatch, getState) => {
    const { cities, updating } = getState().Root;
    const idList = cities
    .filter(({ lastUpdate, id }) => lastUpdate - Date.now < 15 * 60 * 1000 && updating[id])
    .map(({ city }) => city.id);

    dispatch(addToUpdate(idList));

    getWether.byIds(idList)
    .then(list => {
        dispatch(updateWeather(list));
        dispatch(removeFromUpdate(list));
    });
}

export const addToUpdate = (data) => {
    return {
        type: ADD_TO_UPDATE,
        data
    }
}

export const removeFromUpdate = (data) => {
    return {
        type: REMOVE_FROM_UPDATE,
        data
    }
}

