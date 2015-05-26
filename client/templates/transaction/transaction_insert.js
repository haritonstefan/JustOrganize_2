AutoForm.hooks({
  insertTransaction: {
    before: {
      method: function (doc) {
        console.log(doc);
        var parentData = Template.parentData(1);
        parentData.inserting.set(!parentData.inserting.get());
        var budget_id = parentData._id;
        doc._owner = Meteor.userId();
        doc._list_id = budget_id;
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