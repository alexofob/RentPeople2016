/* eslint "import/no-unresolved": [ 2, { "ignore": ["^meteor/"] }] */
import { Accounts } from 'meteor/accounts-base';
import { setSnackbarMessage, openSnackbar, closeDialog } from '../header';
import { batchActions } from 'redux-batched-actions';
import { browserHistory } from 'react-router';

export function submitResetPwd(data) {
  return (dispatch) => {
    const { email } = data;

    Accounts.forgotPassword({ email }, (err) => {
      if (err && err.reason) {
        return dispatch(batchActions([setSnackbarMessage(err.reason), openSnackbar()]));
      }
      return dispatch(batchActions([setSnackbarMessage(
        'A link has been sent to your email to reset your password'),
        openSnackbar(), closeDialog()]));
    });
  };
}

export function handleResetPwd(data, token) {
  return (dispatch) => {
    const { password } = data;

    Accounts.resetPassword(token, password, (err) => {
      if (err && err.reason) {
        return dispatch(batchActions([setSnackbarMessage(err.reason), openSnackbar()]));
      }
      browserHistory.push('/');
      return dispatch(closeDialog());
    });
  };
}
