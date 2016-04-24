import { Accounts } from 'meteor/meteor';
import { setSnackbarMessage, openSnackbar, closeDialog } from '../header';

export function submitResetPwd(data) {
  return (dispatch) => {
    const { email } = data;

    Accounts.forgotPassword({ email }, (err) => {
      if (err && err.reason) {
        return dispatch([setSnackbarMessage(err.reason), openSnackbar]);
      }
      return dispatch([setSnackbarMessage(
        'A link has been sent to your email to reset your password'), openSnackbar, closeDialog]);
    });
  };
}
