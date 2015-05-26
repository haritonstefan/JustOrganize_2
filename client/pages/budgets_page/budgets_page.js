Template.budgetsPage.created = function() {
  this.adding = new ReactiveVar(false);
};

Template.budgetsPage.helpers({
  'adding': function() {
    return Template.instance().adding.get();
  },
  'budgets': function() {
    return Budgets.find();
  }
});

Template.budgetsPage.events({
  'click #new-budget-button': function(e, template) {
    template.adding.set(!template.adding.get());
  }
});