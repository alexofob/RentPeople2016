import React, { PropTypes } from 'react';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';

class AuthenticatedNavigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { firstName, onLogout } = this.props;
    return (
      <div>
        <FlatButton
          onClick={this.handleTouchTap}
          label={firstName}
          labelPosition="before"
          leftIcon={<FontIcon className="material-icons">person</FontIcon>}
          icon={<FontIcon className="material-icons">arrow_drop_down</FontIcon>}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
          autoCloseWhenOffScreen
        >
          <Menu>
            <MenuItem
              primaryText="My Dashboard" leftIcon={
                <FontIcon className="material-icons">
                dashboard
                </FontIcon>}
            />
            <MenuItem
              primaryText="My Listings" leftIcon={
                <FontIcon className="material-icons">
                  list
                </FontIcon>}
            />
            <MenuItem
              primaryText="My Reservations" leftIcon={
                <FontIcon className="material-icons">store</FontIcon>}
            />
            <MenuItem
              primaryText="Edit Profile" leftIcon={
                <FontIcon className="material-icons">person</FontIcon>}
            />
            <Divider />
            <MenuItem
              primaryText="Log Out" leftIcon={
                <FontIcon className="material-icons">arrow_back</FontIcon>}
              onTouchTap={onLogout}
            />
          </Menu>
        </Popover>
      </div>
      );
  }
}


AuthenticatedNavigation.propTypes = {
  firstName: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default AuthenticatedNavigation;
