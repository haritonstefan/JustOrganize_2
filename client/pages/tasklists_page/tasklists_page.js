Template.tasklistsPage.created = function() {
  this.adding = new ReactiveVar(false);
};

Template.tasklistsPage.helpers({
  adding: function() {
    return Template.instance().adding.get();
  },
  tasklists: function () {
    return Tasklists.find();
  }
});

Template.tasklistsPage.events({
  "click #new-list-button": function(e, template) {
    template.adding.set(!template.adding.get());
  }
});