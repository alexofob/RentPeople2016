import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

const MobileAuthNavigation = ({ firstName, onLogout }) => (
  <Menu>
    <MenuItem
      primaryText={firstName}
      leftIcon={<FontIcon
        className="material-icons"
      >
      person</FontIcon>}
    />
    <Divider />
    <MenuItem
      primaryText="My Dashboard"
      leftIcon={<FontIcon className="material-icons">
      dashboard</FontIcon>}
    />
    <MenuItem
      primaryText="My Listings" leftIcon={<FontIcon className="material-icons">
      list</FontIcon>}
    />
    <MenuItem
      primaryText="My Reservations" leftIcon={<FontIcon className="material-icons">
      store</FontIcon>}
    />
    <MenuItem
      primaryText="Find a house to rent" leftIcon={<FontIcon className="material-icons">
      search</FontIcon>}
    />
    <MenuItem
      primaryText="List your house" leftIcon={<FontIcon className="material-icons">
      add_circle</FontIcon>}
    />
    <Divider />
    <MenuItem
      primaryText="Log Out" leftIcon={<FontIcon className="material-icons">
      arrow_back</FontIcon>} onTouchTap={onLogout}
    />
  </Menu>
);

MobileAuthNavigation.propTypes = {
  firstName: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default MobileAuthNavigation;
