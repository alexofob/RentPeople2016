import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import MainLayout from '../../ui/layouts/main-layout.jsx';
import Home from '../../ui/components/home.jsx';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    mount(MainLayout, {
      content: () => (<Home />)
    });
  }
});
