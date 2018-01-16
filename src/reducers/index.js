import {combineReducers } from 'redux';
import names from './name';
import error from './error';

const reducers = combineReducers({
  names,
  error
});

export default reducers;
