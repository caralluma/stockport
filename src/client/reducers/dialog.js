import { SHOW_DIALOG, HIDE_DIALOG } from '../constants/dialog';

const initialState = {
  showTaskDialog: false
};

export default function dialog (state = initialState, action) {
  switch (action.type) {
    case SHOW_DIALOG:
      return { ...state, showTaskDialog: true };
    case HIDE_DIALOG:
      return { ...state, showTaskDialog: false };
    default:
      return state;
  }
}
