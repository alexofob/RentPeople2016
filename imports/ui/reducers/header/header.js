import {
  TOGGLE_LEFT_NAV, CLOSE_LEFT_NAV, CLOSE_DIALOG, OPEN_DIALOG, CLOSE_SNACKBAR,
  SET_SNACKBAR_MESSAGE, SET_DIALOG_CONTENT,
} from '../../constants/header';

export const leftNavState = (state = false, action) => {
  switch (action.type) {
    case CLOSE_LEFT_NAV:
      return false;
    case TOGGLE_LEFT_NAV:
      return !state;
    default:
      return state;
  }
};

export const dialogState = (state = false, action) => {
  switch (action.type) {
    case CLOSE_DIALOG:
      return false;
    case OPEN_DIALOG:
      return true;
    default:
      return state;
  }
};

export const dialogContent = (state = 'login', action) => {
  switch (action.type) {
    case SET_DIALOG_CONTENT:
      return action.content;
    default:
      return state;
  }
};

export const snackbarState = (state = false, action) => {
  switch (action.type) {
    case CLOSE_SNACKBAR:
      return false;
    default:
      return state;
  }
};

export const snackbarMessage = (state = ' ', action) => {
  switch (action.type) {
    case SET_SNACKBAR_MESSAGE:
      return {
        snackbarMessage: action.message,
      };
    default:
      return state;
  }
};
