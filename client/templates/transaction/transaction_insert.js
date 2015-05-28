AutoForm.hooks({
  insertTransaction: {
    before: {
      method: function (doc) {
        var parentData = Template.parentData(1);
        var budget_id = parentData._id;
        doc._owner = Meteor.userId();
        doc._budget = budget_id;
        console.log(doc);
        parentData.inserting.set(!parentData.inserting.get());
          Meteor.call('addTransaction', doc);
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