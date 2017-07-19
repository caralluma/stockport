import { combineReducers } from 'redux';
import dialog from './dialog';
import task from './task';

export default combineReducers({
  dialog,
  task
});
