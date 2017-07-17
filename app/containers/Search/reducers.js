const initialState = {
	query: '',
	resultList: []
};
import { QUERY_CHANGE, LIST_CHANGE } from './constants';

function Search (state = initialState, action) {
	switch (action.type) {
		case QUERY_CHANGE:
			return {
				...state,
				query: action.data.query
			};
		case LIST_CHANGE:
			return {
				...state,
				resultList: action.data.list
			};
		default:
			return state;
	}
}

export default Search;