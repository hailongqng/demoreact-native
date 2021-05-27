import {put, takeLatest, select} from 'redux-saga/effects';
import {authenticationAPI} from '../../../services/remote';

import * as types from './types';

function* login(action) {
  try {
    const a = 1;
    const auth = yield authenticationAPI.login(action.payload);
    yield put({type: types.LOGIN_FETCH_SUCCESS, payload: 1});
    action.callback(true);
  } catch (e) {
    action.callback(false);
    yield put({type: types.LOGIN_FETCH_FAILURE});
  }
}

function* logout(action) {
  try {
    yield authenticationAPI.logout(action.payload);
  } catch (e) {
  } finally {
    yield put({type: types.LOGOUT});
  }
}

export function* submitLogOutSaga() {
  yield takeLatest(types.LOGOUT_SUBMIT, logout);
}
export function* submitLoginSaga() {
  yield takeLatest(types.LOGIN_SUBMIT, login);
}
