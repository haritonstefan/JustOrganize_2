Template.tasklistShow.created = function() {
  this.inserting = new ReactiveVar(false);
};

Template.tasklistShow.helpers({
  inserting: function(){
    this.inserting = Template.instance().inserting;
    return Template.instance().inserting.get();
  },
  tasks: function(){
    return Tasks.find({_list_id: this._id});
  }
});

Template.tasklistShow.events({
  "click #addTask": function(e, template) {
    template.inserting.set(!template.inserting.get());
  }
});
