AutoForm.hooks({
  insertTransaction: {
    before: {
      insert: function (doc) {
        var parentData = Template.parentData(1);
        var budget_id = parentData._id;
        doc._owner = Meteor.userId();
        doc._budget = budget_id;
        doc.date = new Date();
        parentData.inserting.set(!parentData.inserting.get());
        return doc;
      }
    }
  }
});


Template.transactionInsert.helpers({
  'transactionTypes': function () {
    return [
      {label: 'Income', value: '+'},
      {label: 'Expense', value: '-'}
    ];
  }
});