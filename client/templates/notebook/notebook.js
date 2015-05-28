Template.notebook.created = function () {
  this.editing = new ReactiveVar(false);
};

Template.notebook.helpers({
  editing: function () {
    this.editing = Template.instance().editing;
    return Template.instance().editing.get();
  }
});

Template.notebook.events({
  "click #edit-notebook-button": function (e, template) {
    template.editing.set(!template.editing.get());
  },
  "click #delete-notebook-button": function (e, template) {
    Meteor.call('removeNotebook', this._id);
  }
});