Template.notebooksPage.created = function () {
  this.adding = new ReactiveVar(false);
};

Template.notebooksPage.helpers({
  notebooks: function () {
    return Notebooks.find();
  },
  adding: function () {
    this.adding = Template.instance().adding;
    return Template.instance().adding.get();
  }
});

Template.notebooksPage.events({
  "click #new-notebook-button": function (e, template) {
    template.adding.set(!template.adding.get());
  }
});