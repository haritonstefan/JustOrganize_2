Meteor.publish('tasklists', function() {
  return Tasklists.find({_owner: this.userId});
});

Meteor.publish('tasks', function() {
  return Tasks.find({_owner: this.userId});
});

Meteor.publish('budgets', function () {
  return Budgets.find({_owner: this.userId});
});

Meteor.publish('transactions', function() {
  return Transactions.find({_owner: this.userId});
});

Meteor.publish('notebooks', function () {
  return Notebooks.find({_owner: this.userId});
});

Meteor.publish('notes', function () {
  return Notes.find({_owner: this.userId});
});