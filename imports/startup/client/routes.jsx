import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// pages
import MainLayout from '../../ui/layouts/main-layout.jsx';
import Home from '../../ui/components/home.jsx';

export default function Routes(props) {
  return (
    <Router history={props.history}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
}
