/* eslint "import/no-unresolved": [ 2, { "ignore": ["^meteor/"] }] */
import { Meteor } from 'meteor/meteor';
import { setSnackbarMessage, openSnackbar, closeDialog, setDialogContent } from '../header';
import { batchActions } from 'redux-batched-actions';

export function submitLogin(data) {
  return (dispatch) => {
    Meteor.loginWithPassword(data.email, data.password, (err) => {
      if (err && err.reason) {
        return dispatch(batchActions([setSnackbarMessage(err.reason), openSnackbar()]));
      }
      return dispatch(batchActions([setSnackbarMessage('Login Successful'),
        openSnackbar(), closeDialog()]));
    });
  };
}

export function facebookLogin() {
  return (dispatch) => {
    const options = {
      requestPermissions: ['public_profile', 'email'],
    };
    Meteor.loginWithFacebook(options, (err) => {
      if (err) {
        return dispatch(batchActions([setSnackbarMessage(err.reason), openSnackbar()]));
      }
      return dispatch(batchActions([setSnackbarMessage('Login Successful'), openSnackbar(),
        closeDialog()]));
    });
  };
}

export function signUpClick(event) {
  return (dispatch) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    return dispatch(setDialogContent('signup'));
  };
}

export function resetPwdClick(event) {
  return (dispatch) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    return dispatch(setDialogContent('resetPwd'));
  };
}
