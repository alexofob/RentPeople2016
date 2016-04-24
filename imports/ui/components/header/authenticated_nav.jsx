import React, { PropTypes } from 'react';
import Popover from 'material-ui/lib/popover/popover';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';
import Divider from 'material-ui/lib/divider';

const styles = {
  popover: {
    padding: 20,
  },
};

const AuthenticatedNavigation = ({ openPopOver, anchorEl, onClickDropDown,
  firstName, onRequestClose, onLogout }) => (
  <div>
    <FlatButton
      onTouchTap={onClickDropDown}
      label={firstName}
      labelPosition="before"
      icon={<FontIcon className="material-icons">arrow_drop_down</FontIcon>}
    />
    <Popover
      open={openPopOver}
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
      onRequestClose={onRequestClose}
    >
      <div style={styles.popover}>
        <MenuItem primaryText="My Dashboard" leftIcon={
          <FontIcon className="material-icons">
            dashboard
          </FontIcon>}
        />
        <MenuItem primaryText="My Listings" leftIcon={
          <FontIcon className="material-icons">
            list
          </FontIcon>}
        />
        <MenuItem primaryText="My Reservations" leftIcon={
          <FontIcon className="material-icons">store</FontIcon>}
        />
        <MenuItem primaryText="Edit Profile" leftIcon={
          <FontIcon className="material-icons">person</FontIcon>}
        />
        <Divider />
        <MenuItem primaryText="Log Out" leftIcon={
          <FontIcon className="material-icons">arrow_back</FontIcon>}
          onTouchTap={onLogout}
        />
      </div>
    </Popover>
  </div>
);

AuthenticatedNavigation.propTypes = {
  openPopOver: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object.isRequired,
  onClickDropDown: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default AuthenticatedNavigation;
