import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Login from '../../account/login.jsx';
import { linkTo } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Core.Account.Login', module)
  .addDecorator(
      (story) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {story()}
        </MuiThemeProvider>
      )
    )
  .add('default view', () => (
    <Login onFacebookLogin={action('click the Facebook button')}
      onResetPwdClick={linkTo('Core.Account.ResetPwd', 'default view')}
      onSignUpClick={linkTo('Core.Account.SignUp', 'default view')}
      onSubmitLogin={action('click the Submit button')}
    />
  ));
