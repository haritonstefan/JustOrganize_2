//AutoForm.hooks({
//  insertTask: {
//    before: {
//      insert: function (doc) {
//        doc._owner = Meteor.userId();
//        console.log(Template.parentData(1));
//        return doc;
//      }
//    }
//  }
//});