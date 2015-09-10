Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'other': 1, 'things': 1}});
  } else {
    this.ready();
  }
});

// Publish the logged in user's posts

Meteor.publish("pomodoros", function () {
  return Pomodoros.find({ userID: this.userId });
});

Meteor.methods({
  pomodoroFinished:  function () {
    //Meteor.setTimeout(console.log("Finished pomodoro"), 500);
    console.log("finished pomodoro");
  }
})