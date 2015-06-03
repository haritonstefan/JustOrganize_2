Template.task.created = function(){
  this.editing = new ReactiveVar(false);
};

Template.task.helpers({
  editing: function() {
    this.editing = Template.instance().editing;
    return Template.instance().editing.get();
  }
});

Template.task.events({
  "click #toggleEdit": function(event, template){
    template.editing.set(!template.editing.get());
  }
});
