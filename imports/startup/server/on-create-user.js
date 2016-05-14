import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

// Generate user's name after sign up
Accounts.onCreateUser((options, user) => {
  const name = options.profile.name;
  const userInfo = user;
  let firstName;
  let lastName;

  if (name && name.firstName) {
    check(name.firstName, String);
    firstName = name.firstName;
    if (name.lastName) {
      check(name.lastName, String);
      lastName = name.lastName;
    }
    userInfo.name = { firstName, lastName };
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
