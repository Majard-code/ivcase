import { takeEvery, all, put, call } from 'redux-saga/effects';
import { fetchAllStart, fetchAllSuccess, fetchAllFailed } from './reducers/app';
import { fetchReqStart, fetchReqSuccess, fetchReqFailed } from './reducers/editReq';
import axios from 'axios';
import APIs from '../api/apis';
import { clearNewReq } from './reducers/createReq';
import { closeCreateReq, openEditReq } from './reducers/main';

function* fetchAll() {
    try {
        yield put(fetchAllStart());
        const data = yield all([
            call(() => axios.get(APIs.priorities).then(res => res.data)),
            call(() => axios.get(APIs.services).then(res => res.data)),
            call(() => axios.get(APIs.statuses).then(res => res.data)),
            call(() => axios.get(APIs.tags).then(res => res.data)),
            call(() => axios.get(APIs.tasks).then(res => res.data.value)),
            call(() => axios.get(APIs.taskTypes).then(res => res.data)),
            call(() => axios.get(APIs.userGroups).then(res => res.data)),
            call(() => axios.get(APIs.users).then(res => res.data))
        ]);
        yield put(fetchAllSuccess(data));
    } catch (e) {
        yield put(fetchAllFailed(e));
    };
};
function* fetchReq(action) {
    try {
        yield put(fetchReqStart());
        const data = yield call(() => axios.get(`${APIs.gppTask}${action.payload}`).then(res => res.data));
        yield put(fetchReqSuccess(data));
        yield put(openEditReq());
    } catch (e) {
        yield put(fetchReqFailed(e));
    };
};
function* saveNewReq(action) {
    try {
        const data = yield call(() => axios.post(APIs.gppTask, { name: action.reqName, description: action.reqDesc }).then(res => res.data));
        yield put(clearNewReq());
        yield put(closeCreateReq());
        yield call(fetchAll);
        yield call(fetchReq, { type: 'FETCH_REQ', payload: data });
    } catch (e) {
        yield put(clearNewReq());
        yield put(closeCreateReq());
        yield call(fetchAll);
    };
};
function* saveNewReqComment(action) {
    try {
        const data = yield call(() => axios.put(`${APIs.gppTask}`, { comment: action.payload }));
        yield call(fetchReq, { type: 'FETCH_REQ', payload: data });
    } catch (e) {
        yield put(fetchReqFailed());
    };
};

function* rootSaga() {
    yield takeEvery('FETCH_ALL', fetchAll);
    yield takeEvery('FETCH_REQ', fetchReq);
    yield takeEvery('SAVE_NEW_REQ', saveNewReq);
    yield takeEvery('SAVE_NEW_REQ_COMMENT', saveNewReqComment);
};

export default rootSaga;