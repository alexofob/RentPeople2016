import { Accounts } from 'meteor/meteor';
import { setSnackbarMessage, openSnackbar, closeDialog, setDialogContent } from '../header';

export function submitSignUp(data) {
  return (dispatch) => {
    const { firstname, surname, email, password } = data;

    const accountObject = {
      profile: {
        firstName: firstname,
        lastName: surname,
      },
      email,
      password,
    };

    Accounts.createUser(accountObject, (err) => {
      if (err && err.reason) {
        return dispatch([setSnackbarMessage(err.reason), openSnackbar]);
      }
      return dispatch([setSnackbarMessage('Signup Successful'), openSnackbar, closeDialog]);
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
