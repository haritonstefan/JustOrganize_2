AutoForm.hooks({
  insertTask: {
    before: {
      insert: function (doc) {
        var parentData = Template.parentData(1);
        var list_id = parentData._id;
        doc._owner = Meteor.userId();
        doc._list_id = list_id;
        return doc;
      }
    }
  }
});


Template.taskInsert.events({
  "click #cancelSubmit": function (e, template) {
    e.preventDefault();
    AutoForm.resetForm('insertTask');
    template.data.inserting.set(!template.data.inserting.get());
  }
});