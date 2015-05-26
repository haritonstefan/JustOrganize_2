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