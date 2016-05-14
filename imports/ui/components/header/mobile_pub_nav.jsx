import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';

const MobilePubNavigation = ({ showLoginDialog }) => (
  <div>

    <MenuItem
      primaryText="Log in" leftIcon={<FontIcon className="material-icons">
      arrow_forward</FontIcon>} onClick={showLoginDialog}
    />
    <MenuItem
      primaryText="Services" leftIcon={<FontIcon className="material-icons">
      info</FontIcon>}
    />
    <MenuItem
      primaryText="List your house" leftIcon={<FontIcon className="material-icons">
      add_circle</FontIcon>}
    />
    <MenuItem
      primaryText="Find a house to rent" leftIcon={<FontIcon className="material-icons">
      search</FontIcon>}
    />

  </div>
);

MobilePubNavigation.propTypes = {
  showLoginDialog: PropTypes.func.isRequired,
};

export default MobilePubNavigation;
