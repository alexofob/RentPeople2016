import React, { PropTypes } from 'react';

import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';

import Login from '../../containers/account/login';
import SignUp from '../../containers/account/signup';
import AuthenticatedNavigation from './authenticated_nav.jsx';
import PublicNavigation from './public_nav.jsx';
import MobilePubNavigation from './mobile_pub_nav.jsx';
import MobileAuthNavigation from './mobile_auth_nav.jsx';
import ResetPwd from '../../containers/account/reset-password';

const styles = {
  menuIcon: {
    marginRight: 25,
    marginLeft: -25,
    display: 'none',
  },
  dialogContent: {
    width: '90%',
    maxWidth: 320,
    display: 'flex',
    flexDirection: 'column',
  },
};

const arrDialogContent = {
  login: { node: <Login />, title: '' },
  signup: { node: <SignUp />, title: 'Sign Up' },
  resetPwd: { node: <ResetPwd />, title: 'Reset Password' },
};

const NavBar = ({ openLeftNav, onToggleLeftNav, onCloseLeftNav,
  openDialog, onCloseDialog, dialogContent, openSnackbar, onCloseSnackbar,
  snackbarMessage, showLoginDialog, handleLogout, userExists, firstName }) => (
  <div>
    <Toolbar>
      <ToolbarGroup float="left">
        <FontIcon
          className="material-icons mobile-only"
          style={styles.menuIcon}
          onClick={onToggleLeftNav}
        >
          menu
        </FontIcon>
        <a className="brand" href="/">
          <ToolbarTitle text="Rent People" />
        </a>
      </ToolbarGroup>
      <ToolbarGroup className="desktop-only flex-container" lastChild float="right">
        {userExists ? <AuthenticatedNavigation
          onLogout={handleLogout}
          firstName={firstName}
        /> : <PublicNavigation showLoginDialog={showLoginDialog} />}
        <FlatButton label="Services" />
        <RaisedButton label="List your house" primary />
      </ToolbarGroup>
    </Toolbar>

    <Drawer
      docked={false}
      width={250}
      open={openLeftNav}
      onRequestChange={onCloseLeftNav}
    >
      {userExists ? <MobileAuthNavigation
        onLogout={handleLogout}
        firstName={firstName}
      /> : <MobilePubNavigation showLoginDialog={showLoginDialog} />}

    </Drawer>

    <Dialog
      title={arrDialogContent[dialogContent].title}
      modal={false}
      open={openDialog}
      onRequestClose={onCloseDialog}
      contentStyle={styles.dialogContent}
      autoScrollBodyContent
    >
      {arrDialogContent[dialogContent].node}

    </Dialog>

    <Snackbar
      open={openSnackbar}
      message={snackbarMessage}
      autoHideDuration={8000}
      onRequestClose={onCloseSnackbar}
    />

  </div>
);

NavBar.propTypes = {
  openLeftNav: PropTypes.bool.isRequired,
  onToggleLeftNav: PropTypes.func.isRequired,
  onCloseLeftNav: PropTypes.func.isRequired,
  openDialog: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func.isRequired,
  dialogContent: PropTypes.string.isRequired,
  openSnackbar: PropTypes.bool.isRequired,
  onCloseSnackbar: PropTypes.func.isRequired,
  snackbarMessage: PropTypes.string.isRequired,
  showLoginDialog: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  userExists: PropTypes.bool.isRequired,
};

export default NavBar;
