import {all, fork} from 'redux-saga/effects';
import * as loginSaga from '../scenes/login/duck/saga';

export default function* rootSaga() {
  yield all([...Object.values(loginSaga)].map(fork));
}
