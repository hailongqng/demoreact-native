import * as types from './types';

export default {
  login: (info, cb = () => {}) => ({
    type: types.LOGIN_SUBMIT,
    payload: info,
    callback: cb,
  }),
  logout: (info, cb = () => {}) => ({
    type: types.LOGOUT_SUBMIT,
    payload: info,
    callback: cb,
  }),
};
