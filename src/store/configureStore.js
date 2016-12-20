/**
 * Created by awu on 2016-12-20.
 */
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(createLogger({ stateTransformer: state => state.toJS() }))
);