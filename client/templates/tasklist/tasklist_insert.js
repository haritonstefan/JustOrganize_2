AutoForm.hooks({
  insertTasklist: {
    before: {
      insert: function (doc) {
        doc._owner = Meteor.userId();
        console.log(doc);
        return doc;
      }
    }
  }
});
