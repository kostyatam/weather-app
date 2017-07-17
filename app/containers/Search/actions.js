import { QUERY_CHANGE, LIST_CHANGE } from './constants';
import { search, utils } from 'utils';

const getCitiesList = utils.debounce((query, dispatch) => {
    search
        .getCitiesList(query)
        .then(list => {
            dispatch(changeList(list));
        }); 
}, 500)

export const changeQuery = (query) => {
    return {
        type: QUERY_CHANGE,
        data: {
            query
        }
    } 
}

export const changeList = (list) => {
    return {
        type: LIST_CHANGE,
        data: {
            list
        }
    }
}

export const clearAll = () => (dispatch) => {
    dispatch(changeQuery(''));
    dispatch(changeList([]));
}

export const searchByQuery = (query) => (dispatch, getState) => {
    getCitiesList(query, dispatch);
}
