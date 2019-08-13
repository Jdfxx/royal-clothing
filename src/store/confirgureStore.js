import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import * as actionCreators from './index';

const middleware = [logger];

const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25
});

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
