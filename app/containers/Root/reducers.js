import {
	UPDATE_WEATHER,
	UPDATE_WEATHER_LIST,
	REMOVE_FROM_UPDATE,
	REMOVE_FROM_UPDATE_LIST,
	ADD_TO_UPDATE, 
	ADD_TO_UPDATE_LIST,
} from './constants';
import { localStore } from 'utils';

const initialState = {
	cities: localStore('cities') || [],
	updating: {}
};

function Root(state = initialState, action) {
	switch (action.type) {
		case UPDATE_WEATHER:
			if (Array.isArray(weather)) {
				return Root(state, {
					...action,
					type: UPDATE_WEATHER_LIST
				});
			};

			const weather = action.data;
			const index = state.cities.findIndex(city => city.id === weather.id);
			const cities = state.cities.slice(0);
			cities[index !== -1 ? index : cities.length] = weather;
			return {
				...state,
				cities
			};

		case UPDATE_WEATHER_LIST:
			return action.data.reduce((state, data) => Root(state, {
				type: UPDATE_WEATHER,
				data
			}), state);
		case ADD_TO_UPDATE:
			if (Array.isArray(action.data)) {
				return Root(state, {
					...action,
					type: ADD_TO_UPDATE_LIST
				});
			}
			const id = action.data;
			state.updating[id] = id;

			return {
				...state,
				updating: {
					...state.updating
				}
			};

		case ADD_TO_UPDATE_LIST:
			return action.data.reduce((state, data) => Root(state, {
				type: ADD_TO_UPDATE,
				data
			}), state);

		case REMOVE_FROM_UPDATE: {
			if (Array.isArray(action.data)) {
				return Root(state, {
					...action,
					type: REMOVE_FROM_UPDATE_LIST
				});
			}
			const id = action.data;
			delete state.updating[id]

			return {
				...state,
				updating: {
					...state.updating
				}
			};
		}
		case REMOVE_FROM_UPDATE_LIST: {
			return action.data.reduce((state, data) => Root(state, {
				type: REMOVE_FROM_UPDATE,
				data
			}), state);
		}
		default:
			return state;
	}
}

export default Root;