import React from 'react';
import { Route, IndexRoute } from 'react-router';

// pages
import MainLayout from '../../ui/layouts/main-layout.jsx';
import Home from '../../ui/components/home.jsx';
import NotFoundPage from '../../ui/components/not-found-page.jsx';
import ResetPwdFinal from '../../ui/containers/account/reset-password-final';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={Home} />
    <Route path="/reset-password/:token" component={ResetPwdFinal} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
