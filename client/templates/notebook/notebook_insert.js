AutoForm.hooks({
  insertNotebook: {
    before: {
      method: function (doc) {
        doc._owner = Meteor.userId();
        doc.numberOfNotes = 0;
        return doc
      }
    }
  }
});