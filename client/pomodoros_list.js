  Template.pomodorosList.helpers({
    list: function () {
      return Pomodoros.find();
    }
  });
  Template.pomodorosList.events({
    "submit form": function (event, template) {
      //stop default action
      event.preventDefault();

      var goal = event.target.goal.value;
      //validate

      //insert into database
      Pomodoros.insert({goal: goal, startDate: new Date()});

      //clear the vallue
      template.find('form').reset();
    },

    "click .deleteButton": function (event) {
      Pomodoros.remove({_id: this._id});
    }
  });
