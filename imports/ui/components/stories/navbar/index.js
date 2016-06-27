import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import NavBar from '../../navbar/index.jsx';
import { linkTo } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Core.NavBar', module)
  .addDecorator(
      (story) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {story()}
        </MuiThemeProvider>
      )
    )
  .add('Public view', () => (
    <NavBar
      openLeftNav={linkTo('Core.NavBar.MobileAuthNavigation', 'default view')}
      onToggleLeftNav={action('click the Submit button')}
      onCloseLeftNav={action('click the Submit button')}
      openDialog={false}
      onCloseDialog={action('click the Submit button')}
      dialogContent="login"
      openSnackbar={false}
      onCloseSnackbar={action('click the Submit button')}
      snackbarMessage=" "
      showLoginDialog={action('click the Submit button')}
      handleLogout={action('click the Submit button')}
      firstName= " "
      userExists={false}
    />
  ));
