import React  from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import Store from '../imports/ui/store';
import routes from '../imports/startup/client/routes.jsx';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

// pages
import MainLayout from '../imports/ui/layouts/main-layout.jsx';
import Home from '../imports/ui/components/home.jsx';
import Login from '../imports/ui/containers/account/login';
import SignUp from '../imports/ui/containers/account/signup';
import ResetPwd from '../imports/ui/containers/account/reset-password';


function AppRoot() {
  return (
    <Provider store={Store}>
      <Router history={browserHistory}>
        <Route path="/" component={ MainLayout }>
          <IndexRoute component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/resetPassword" component={ ResetPwd } />
        </Route>
      </Router>
    </Provider>
  );
}

Meteor.startup(()=> {
  ReactDOM.render(
    <AppRoot />,
    document.getElementById('react-root')
  );
});
