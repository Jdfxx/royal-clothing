import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import * as actionCreators from './index';
import {persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root.saga";


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// process.env.NODE_ENV === 'development' && middleware.push(logger);

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

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};
