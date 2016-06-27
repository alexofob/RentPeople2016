import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ResetPwdFinal from '../../account/reset_pwd_final.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Core.Account.ResetPwdFinal', module)
  .addDecorator(
      (story) => (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {story()}
        </MuiThemeProvider>
      )
    )
  .add('default view', () => (
    <ResetPwdFinal
      onResetPwd={action('click the Submit button')}
    />
  ));
