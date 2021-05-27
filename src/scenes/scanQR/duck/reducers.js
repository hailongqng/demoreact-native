import * as types from './types';

const INITIAL_STATE = {
  loading: false,
  auth: {},
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_FETCH_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        loading: false,
      };
    case types.LOGIN_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        auth: {},
        user: {},
      };
    default:
      return state;
  }
};
