AutoForm.hooks({
  insertTasklist: {
    before: {
      insert: function (doc) {
        console.log('hu!');
        doc._owner = Meteor.userId();
        return doc;
      }
    }
  }
});