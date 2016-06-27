import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ResetPwd from '../../account/reset_pwd.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Core.Account.ResetPwd', module)
  .addDecorator(
      (story) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {story()}
        </MuiThemeProvider>
      )
    )
  .add('default view', () => (
    <ResetPwd
      onSubmitResetPwd={action('click the Submit button')}
    />
  ));
