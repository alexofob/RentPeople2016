import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
import Store from '../imports/ui/store';
import routes from '../imports/startup/client/routes.jsx';
import { Router, browserHistory } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function AppRoot() {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Provider store={Store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    </MuiThemeProvider>
  );
}

Meteor.startup(() => {
  ReactDOM.render(
    <AppRoot />,
    document.getElementById('react-root')
  );
});
