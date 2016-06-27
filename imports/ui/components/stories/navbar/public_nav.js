import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PublicNavigation from '../../navbar/public_nav.jsx';
import { linkTo } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Core.NavBar.PublicNavigation', module)
  .addDecorator(
      (story) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {story()}
        </MuiThemeProvider>
      )
    )
  .add('default view', () => (
    <PublicNavigation
      showLoginDialog={linkTo('Core.Account.Login', 'default view')}
    />
  ));
