import React, { PropTypes } from 'react';

import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import FlatButton from 'material-ui/lib/flat-button';
import LeftNav from 'material-ui/lib/left-nav';
import Dialog from 'material-ui/lib/dialog';
import Snackbar from 'material-ui/lib/snackbar';

import Login from '../../containers/account/login';
import SignUp from '../../containers/account/signup';
import AuthenticatedNavigation from '../../containers/header/authenticated-nav';
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

const Header = ({ isLoggedIn, openLeftNav, onToggleLeftNav, onCloseLeftNav,
  openDialog, onCloseDialog, dialogContent, openSnackbar, onCloseSnackbar,
  snackbarMessage, showLoginDialog, handleLogout, firstName }) => (
  <div>
    <Toolbar>
      <ToolbarGroup float="left">
        <FontIcon className="material-icons mobile-only"
          style={styles.menuIcon}
          onTouchTap={onToggleLeftNav}
        >
          menu
        </FontIcon>
        <a className="brand" href="/">
            <ToolbarTitle text="Rent People" />
        </a>
      </ToolbarGroup>
      <ToolbarGroup className="desktop-only flex-container" lastChild float="right">
        {isLoggedIn() ? <AuthenticatedNavigation onLogout={handleLogout} firstName={firstName} /> :
          <PublicNavigation showLoginDialog={showLoginDialog} /> }
        <FlatButton label="Services" />
        <RaisedButton label="List your house" primary />
      </ToolbarGroup>
    </Toolbar>

    <LeftNav
      docked={false}
      width={250}
      open={openLeftNav}
      onRequestChange={onCloseLeftNav}
    >
      {isLoggedIn() ? <MobileAuthNavigation onLogout={handleLogout} firstName={firstName} /> :
        <MobilePubNavigation /> }

    </LeftNav>

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

Header.propTypes = {
  isLoggedIn: PropTypes.func.isRequired,
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
};

export default Header;
