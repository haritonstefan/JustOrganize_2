AutoForm.hooks({
  updateTask: {
    after: {
      update: function (doc) {
        
        Template.instance().parentData(1).editing.set(!Template.instance().parentData(1).editing.get());
      }
    }
  }
});

Template.tasklistEdit.events({
  "click #cancelEditTasklist": function(e, template){
    template.data.editing.set(!template.data.editing.get());
  }
});