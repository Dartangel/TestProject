import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../../saga';
import { DriversState } from '../../../views/homeScreen/redux/types';

const sagaMiddleware = createSagaMiddleware();


const middleware = [sagaMiddleware];

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware)));


sagaMiddleware.run(rootSaga);


export interface AppState {
    driversReducer: DriversState;
}
