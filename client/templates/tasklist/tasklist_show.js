Template.tasklistShow.created = function() {
  this.inserting = new ReactiveVar(false);
};

Template.tasklistShow.helpers({
  editing: function(){
    return Template.instance().inserting.get();
  }
});

Template.tasklistShow.events({
  "click #insertTask": function(e, template) {
    this.inserting = !this.inserting
    template.inserting.set(!template.inserting.get());
  }
});