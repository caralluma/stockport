import axios from 'axios';
import { API_URL } from '../constants/api';
import { hideDialog } from './dialog-actions';
import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  CHECK_TASK_REQUEST,
  CHECK_TASK_SUCCESS,
  CHECK_TASK_ERROR,
  CLEAR_TASKS_REQUEST,
  CLEAR_TASKS_SUCCESS,
  CLEAR_TASKS_ERROR
} from '../constants/task';

export function getTasks () {
  return (dispatch) => {
    dispatch({
      type: GET_TASKS_REQUEST
    });
    axios.get(`${API_URL}/tasks`)
      .then((response) => {
        const tasks = response.data;
        dispatch({
          type: GET_TASKS_SUCCESS,
          payload: tasks
        });
      }).catch((err) => {
      dispatch({
        type: GET_TASKS_ERROR,
        payload: err
      });
    });
  };
}

export function addTask (task) {
  return (dispatch) => {
    dispatch({
      type: ADD_TASK_REQUEST
    });
    axios.post(`${API_URL}/add-task`, task)
      .then(() => {
        dispatch({
          type: ADD_TASK_SUCCESS
        });
        dispatch(hideDialog());
      }).catch((err) => {
      dispatch({
        type: ADD_TASK_ERROR,
        payload: err
      });
    });
  };
}

export function checkTask (index, checked) {
  return (dispatch) => {
    dispatch({
      type: CHECK_TASK_REQUEST
    });
    axios.post(`${API_URL}/check-task`, { index, checked })
      .then(() => {
        dispatch({
          type: CHECK_TASK_SUCCESS
        });
      }).catch((err) => {
      dispatch({
        type: CHECK_TASK_ERROR,
        payload: err
      });
    });
  };
}

export function clearTasks () {
  return (dispatch) => {
    dispatch({
      type: CLEAR_TASKS_REQUEST
    });
    axios.get(`${API_URL}/clear-tasks`)
      .then(() => {
        dispatch({
          type: CLEAR_TASKS_SUCCESS
        });
      }).catch((err) => {
      dispatch({
        type: CLEAR_TASKS_ERROR,
        payload: err
      });
    });
  };
}
