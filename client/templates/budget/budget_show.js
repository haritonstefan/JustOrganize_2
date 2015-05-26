Template.budgetShow.created = function() {
  this.inserting = new ReactiveVar(false);
};

Template.budgetShow.helpers({
  'inserting': function() {
    return Template.instance().inserting.get();
  },
  'incomes': function() {
    return Transactions.find({
      _budget_id: this._id,
      type: '+'
    });
  },
  'expenses': function () {
    return Transactions.find({
      _budget_id: this._id,
      type: '-'
    });
  }
});

Template.budgetShow.events({
  "click #addTransaction": function(e, template) {
    template.inserting.set(!template.inserting.get());
  }
});