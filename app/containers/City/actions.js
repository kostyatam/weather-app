import { updateWeather } from 'containers/Root/actions';
import { getWeather } from 'utils';

export const init = (id) => (dispatch, getState) => {
    getWeather
    .byId(id)
    .then(weather => dispatch(updateWeather(weather)));
}