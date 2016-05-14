/* eslint "import/no-unresolved": [ 2, { "ignore": ["^meteor/"] }] */
import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

const services = Meteor.settings.private.oAuth;

ServiceConfiguration.configurations.upsert({
  service: 'facebook',
}, {
  $set: {
    clientId: services.facebook.clientId,
    loginStyle: 'popup',
    secret: services.facebook.secret,
  },
});
