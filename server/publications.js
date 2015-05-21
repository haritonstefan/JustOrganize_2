Meteor.publish('tasklists', function() {
  return Tasklists.find({
    _owner: Meteor.userId()
  });
});

Meteor.publish('tasks', function() {
  return Tasks.find({
    _owner: Meteor.userId()
  });
});