import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import * as actionCreators from './index';
import logger from 'redux-logger';
import {persistStore} from "redux-persist";

const middleware = [];

if(process.env.NODE_ENV === 'development') {
    middleware.push(logger);
};

const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25
});

export const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default {store, persistor};
