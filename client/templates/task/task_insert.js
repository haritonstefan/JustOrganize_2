AutoForm.hooks({
 insertTask: {
   before: {
     method: function (doc) {
       var parentData = Template.parentData(1);
       parentData.inserting.set(!parentData.inserting.get());
       var list_id = parentData._id;
       doc._owner = Meteor.userId();
       doc._list_id = list_id;
       return doc;
     }
   }
 }
});
