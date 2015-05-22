Meteor.publish('tasklists', function() {
  return Tasklists.find();
});

Meteor.publish('tasks', function() {
  return Tasks.find();
});