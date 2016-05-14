import { Meteor } from 'meteor/meteor';

Meteor.publish('user', function () {
  if (!this.userId) {
    return this.ready();
  }
  return Meteor.users.find({
    _id: this.userId,
  }, {
    fields: {
      name: 1,
    },
  });
});
