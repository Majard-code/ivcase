import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import app from './reducers/app';
import main from './reducers/main';
import createReq from './reducers/createReq';
import editReq from './reducers/editReq';


const reducers = combineReducers ({
    app,
    main,
    createReq,
    editReq,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore (reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;