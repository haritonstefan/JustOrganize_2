Template.notebookShow.created = function () {
  this.inserting = new ReactiveVar(false);
};

Template.notebookShow.helpers({
  notes: function () {
    return Notes.find({_notebook: this._id});
  },
  inserting: function () {
    this.inserting = Template.instance().inserting;
    return Template.instance().inserting.get();
  }
});

Template.notebookShow.events({
  "click #addNote": function (e, template) {
    template.inserting.set(!template.inserting.get());
  }
});