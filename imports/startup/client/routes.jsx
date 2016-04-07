import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import { MainLayout } from '../../ui/layouts/main-layout.jsx';
import { Home } from '../../ui/components/home.jsx';

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ Home } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
