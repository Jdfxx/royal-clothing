import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import * as actionCreators from './index';
import {persistStore} from "redux-persist";

const middleware = [];

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
