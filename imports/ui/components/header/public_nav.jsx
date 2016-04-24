import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/lib/flat-button';

const PublicNavigation = ({ showLoginDialog }) =>
  <FlatButton label={"Log In"} onTouchTap={showLoginDialog} />;

PublicNavigation.propTypes = {
  showLoginDialog: PropTypes.func.isRequired,
};

export default PublicNavigation;
