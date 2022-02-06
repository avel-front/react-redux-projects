import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagMiddleware from 'redux-saga'
import apiReducer from "./modules/api/reducer";
import apiSaga from './modules/api/saga'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const reducers = combineReducers({
    api: apiReducer
});

const sagaMiddleware = createSagMiddleware()
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(apiSaga);

export default store;
