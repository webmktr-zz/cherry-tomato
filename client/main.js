Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Meteor.subscribe("userData");
Meteor.subscribe("pomodoros");