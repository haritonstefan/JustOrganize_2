Template.note.created = function () {
  this.editing = new ReactiveVar(false);
};

Template.note.helpers({
  editing: function () {
    this.editing = Template.instance().editing;
    return this.editing.get();
  }
});

Template.note.events({
  "click #edit-note-button": function (e, template) {
    template.editing.set(!template.editing.get());
  },
  "click #delete-note-button": function (e, template) {
    Meteor.call('removeNote', this._id);
  }
});