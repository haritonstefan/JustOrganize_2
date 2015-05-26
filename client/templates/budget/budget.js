Template.budget.created = function() {
    this.editing = new ReactiveVar(false);
};

Template.budget.helpers({
    'editing': function () {
        return Template.instance().editing.get();
    }
});

Template.budget.events({
    'click #edit-budget-button': function(e) {
        Template.instance().editing.set(!Template.instance().editing.get());
    },
    'click #delete-budget-button': function(e) {
        Meteor.call('removeBudget', this._id);
    }
});