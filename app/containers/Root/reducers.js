import { UPDATE_WEATHER } from './constants';

const initialState = {
	cities: []
};

function Root (state = initialState, action) {
	switch (action.type) {
		case UPDATE_WEATHER:
			const weather  = action.data;
			return Object.assign({}, state, {
				cities: state.cities.filter(city => city.id === weather.id).concat(weather)
			})
		default:
			return state;
	}
}

export default Root;