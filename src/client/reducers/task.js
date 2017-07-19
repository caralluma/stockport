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

const initialState = {
  tasks: [],
  error: {},
  showTasks: 'spinner'
};

export default function task (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return { ...state, showTasks: 'spinner' };
    case GET_TASKS_SUCCESS:
      return { ...state, tasks: action.payload, showTasks: 'content' };
    case GET_TASKS_ERROR:
      return { ...state, error: action.payload, showTasks: 'error' };
    case ADD_TASK_REQUEST:
      return { ...state };
    case ADD_TASK_SUCCESS:
      return { ...state };
    case ADD_TASK_ERROR:
      return { ...state, error: action.payload};
    case CHECK_TASK_REQUEST:
      return { ...state };
    case CHECK_TASK_SUCCESS:
      return { ...state };
    case CHECK_TASK_ERROR:
      return { ...state, error: action.payload};
    case CLEAR_TASKS_REQUEST:
      return { ...state };
    case CLEAR_TASKS_SUCCESS:
      return { ...state };
    case CLEAR_TASKS_ERROR:
      return { ...state, error: action.payload};
    default:
      return state;
  }
}
