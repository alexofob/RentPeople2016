import { Meteor } from 'meteor/meteor';

Meteor.publish('user', () => (
  Meteor.users.find(this.userId, {
    fields: {
      'services.facebook.email': 1,
      emails: 1,
      name: 1,
    },
  })
));
