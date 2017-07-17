import { UPDATE_WEATHER } from './constants';
import { localStore } from 'utils';

export default ({getState, dispatch}) => next => action => {
    let returnValue = next(action);

    if (action.type === 'UPDATE_WEATHER') {
        const { Root } = getState();
        localStore('cities', Root.cities);
    }

    return returnValue;
}