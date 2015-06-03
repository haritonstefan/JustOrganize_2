Template.taskShow.events({
  "click #deleteTask": function(event, template){
    Meteor.call("removeTask", this._id);
  },
  "click #editTask": function (e, t) {
    t.data.editing.set(!t.data.editing.get());
  }
});
