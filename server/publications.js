Meteor.publish('tasklists', function() {
  return Tasklists.find({_owner: this.userId});
});

Meteor.publish('tasks', function() {
  return Tasks.find({_owner: this.userId});
});
