/* eslint "import/no-unresolved": [ 2, { "ignore": ["^meteor/"] }] */
import { connect } from 'react-redux';
import { toggleLeftNav, closeLeftNav, openDialog, setDialogContent,
         closeDialog, closeSnackbar, handleLogout } from '../../actions/header';
import Header from '../../components/header/index.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { batchActions } from 'redux-batched-actions';

const mapStateToProps = (state) => (
  {
    openLeftNav: state.leftNavState,
    openDialog: state.dialogState,
    dialogContent: state.dialogContent,
    openSnackbar: state.snackbarState,
    snackbarMessage: state.snackbarMessage,
  }
);

const HeaderContainer = createContainer(() => {
  const userSub = Meteor.subscribe('user');
  const loading = !userSub.ready();
  const userExists = Boolean(!loading && Meteor.user());
  return {
    loading,
    userExists,
    firstName: userExists ? Meteor.user().name.firstName : '',
  };
}, Header);

const mapDispatchToProps = (dispatch) => (
  {
    handleLogout: () => {
      dispatch(handleLogout());
    },
    onToggleLeftNav: () => {
      dispatch(toggleLeftNav());
    },
    onCloseLeftNav: () => {
      dispatch(closeLeftNav());
    },
    onCloseDialog: () => {
      dispatch(closeDialog());
    },
    onCloseSnackbar: () => {
      dispatch(closeSnackbar());
    },
    showLoginDialog: () => {
      dispatch(batchActions([setDialogContent('login'), openDialog()]));
    },

  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
