import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AuthenticatedNavigation from '../../navbar/authenticated_nav.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Core.NavBar.AuthenticatedNavigation', module)
  .addDecorator(
      (story) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {story()}
        </MuiThemeProvider>
      )
    )
  .add('default view', () => (
    <AuthenticatedNavigation
      firstName="Alex"
      onLogout={action('click the Logout button')}
    />
  ));
