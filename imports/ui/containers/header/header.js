import { connect } from 'react-redux';
import { isLoggedIn, toggleLeftNav, closeLeftNav, openDialog, setDialogContent,
         closeDialog, closeSnackbar } from '../../actions/header';
import Header from '../../components/header/index.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

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
  const user = Meteor.user();
  const userExists = !loading && !!user;
  return {
    loading,
    user,
    userExists,
    firstName: userExists ? user.name.FirstName : '',
  };
}, Header);

const mapDispatchToProps = (dispatch) => (
  {
    isLoggedIn: () => {
      dispatch(isLoggedIn());
    },
    handleLogout: () => {
      dispatch(Meteor.logout);
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
      dispatch(([setDialogContent('login'), openDialog()]));
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
