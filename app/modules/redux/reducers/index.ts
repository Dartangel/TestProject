import { combineReducers } from 'redux';
import { driversReducer } from '../../../views/homeScreen/redux';

const rootReducer = combineReducers({
    driversReducer,
});

export default rootReducer;
