import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';
import { Link } from 'react-router';

const MobilePubNavigation = () => (
  <div>

    <Link to="/login"><MenuItem primaryText="Log in" leftIcon={<FontIcon className="material-icons">
      arrow_forward</FontIcon>}
    />
    </Link>
    <MenuItem primaryText="Services" leftIcon={<FontIcon className="material-icons">
      info</FontIcon>}
    />
    <MenuItem primaryText="List your house" leftIcon={<FontIcon className="material-icons">
      add_circle</FontIcon>}
    />
    <MenuItem primaryText="Find a house to rent" leftIcon={<FontIcon className="material-icons">
      search</FontIcon>}
    />

  </div>
);

export default MobilePubNavigation;
