/* eslint "import/no-unresolved": [ 2, { "ignore": ["^meteor/"] }] */
import { Meteor } from 'meteor/meteor';
import { TOGGLE_LEFT_NAV, CLOSE_LEFT_NAV, CLOSE_DIALOG, OPEN_DIALOG, SET_DIALOG_CONTENT,
  CLOSE_SNACKBAR, OPEN_SNACKBAR, SET_SNACKBAR_MESSAGE } from '../../constants/header';
import { closePopOver } from '../../actions/header/authenticated-nav';

export function handleLogout() {
  return (dispatch) => {
    Meteor.logout();
    return dispatch(closePopOver());
  };
}

export function toggleLeftNav() {
  return {
    type: TOGGLE_LEFT_NAV,
  };
}

export function closeLeftNav() {
  return {
    type: CLOSE_LEFT_NAV,
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG,
  };
}

export function openDialog() {
  return {
    type: OPEN_DIALOG,
  };
}

export function setDialogContent(content) {
  return {
    type: SET_DIALOG_CONTENT,
    content,
  };
}

export function closeSnackbar() {
  return {
    type: CLOSE_SNACKBAR,
  };
}

export function openSnackbar() {
  return {
    type: OPEN_SNACKBAR,
  };
}

export function setSnackbarMessage(message) {
  return {
    type: SET_SNACKBAR_MESSAGE,
    message,
  };
}
