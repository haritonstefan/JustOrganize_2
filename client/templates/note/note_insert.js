AutoForm.hooks({
  insertNote: {
    before: {
      method: function (doc) {
        var parentData = Template.parentData(1);
        doc._owner = Meteor.userId();
        doc._notebook = parentData._id;
        Meteor.call('addNote', doc);
        return doc;
      }
    }
  }
});