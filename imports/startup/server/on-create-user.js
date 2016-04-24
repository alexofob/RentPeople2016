import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

// Generate user's name after sign up
Accounts.onCreateUser((options, user) => {
  const profile = options.profile;
  const userInfo = user;

  if (profile && profile.firstName) {
    check(profile.firstName, String);
    userInfo.name.firstName = profile.firstName;

    if (profile.lastName) {
      check(profile.lastName, String);
      userInfo.name.lastName = profile.lastName;
    }
    check(user.email, String);
    check(user.password, String);
  } else if (user.services.facebook) {
    const { first_name, last_name } = user.services.facebook;
    check(first_name, String);
    check(last_name, String);
    userInfo.name = { firstName: first_name, lastName: last_name };
  } else {
    throw new Error('Expected at least the user first name');
  }

  // return the new user object at the end!
  return userInfo;
});
