import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MobilePubNavigation from '../../navbar/mobile_pub_nav.jsx';
import { linkTo } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Core.NavBar.MobilePubNavigation', module)
  .addDecorator(
      (story) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {story()}
        </MuiThemeProvider>
      )
    )
  .add('default view', () => (
    <MobilePubNavigation
      showLoginDialog={linkTo('Core.Account.Login', 'default view')}
    />
  ));
