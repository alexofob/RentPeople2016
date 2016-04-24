import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// pages
import MainLayout from '../../ui/layouts/main-layout.jsx';
import Home from '../../ui/components/home.jsx';
import Login from '../../ui/components/account/login.jsx';
import SignUp from '../../ui/components/account/signup.jsx';
import ResetPwd from '../../ui/components/account/reset_pwd.jsx';

export default function Routes(props) {
  return (
    <Router history={props.history}>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ SignUp } />
        <Route path="/resetPassword" component={ ResetPwd } />
      </Route>
    </Router>
  );
}
