Template.tasklist.created = function(){
  this.editing = new ReactiveVar(false);
};

Template.tasklist.helpers({
  editing: function() {
    return Template.instance().editing.get();
  }
});

Template.tasklist.events({
  "click #edit-tasklist-button":  function(e, template) {
    template.editing.set(!template.editing.get());
  },
  "click #delete-tasklist-button": function(e) {
    Meteor.call('removeTasklist', this._id);
  }
});