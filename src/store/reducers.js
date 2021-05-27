import {combineReducers} from 'redux';
import login from '../scenes/login/duck/reducers';

export default function createReducer() {
  return combineReducers({
    login,
  });
}
