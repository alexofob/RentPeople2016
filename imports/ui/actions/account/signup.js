/* eslint "import/no-unresolved": [ 2, { "ignore": ["^meteor/"] }] */
import { Accounts } from 'meteor/accounts-base';
import { setSnackbarMessage, openSnackbar, closeDialog, setDialogContent } from '../header';
import { batchActions } from 'redux-batched-actions';

export function submitSignUp(data) {
  return (dispatch) => {
    const { firstname, surname, email, password } = data;

    const accountObject = {
      profile: {
        name: {
          firstName: firstname,
          lastName: surname,
        },
      },
      email,
      password,
    };

    Accounts.createUser(accountObject, (err) => {
      if (err && err.reason) {
        return dispatch(batchActions([setSnackbarMessage(err.reason), openSnackbar()]));
      }
      return dispatch(batchActions([setSnackbarMessage('Signup Successful'),
        openSnackbar(), closeDialog()]));
    });
  };
}

export function loginClick(event) {
  return (dispatch) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    return dispatch(setDialogContent('login'));
  };
}
