import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MobileAuthNavigation from '../../navbar/mobile_auth_nav.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Core.NavBar.MobileAuthavigation', module)
  .addDecorator(
      (story) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {story()}
        </MuiThemeProvider>
      )
    )
  .add('default view', () => (
    <MobileAuthNavigation
      firstName="Alex"
      onLogout={action('click the Logout button')}
    />
  ));
