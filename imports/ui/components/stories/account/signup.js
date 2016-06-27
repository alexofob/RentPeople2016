import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SignUp from '../../account/signup.jsx';
import { linkTo } from '@kadira/storybook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Core.Account.SignUp', module)
  .addDecorator(
      (story) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {story()}
        </MuiThemeProvider>
      )
    )
  .add('default view', () => (
    <SignUp onFacebookSignUp={action('click the Facebook button')}
      onLoginClick={linkTo('Core.Account.Login', 'default view')}
      onSubmitSignUp={action('click the Submit button')}a
    />
  ));
