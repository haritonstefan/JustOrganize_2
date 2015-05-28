AutoForm.hooks({
 insertTask: {
   before: {
     method: function (doc) {
       var parentData = Template.parentData(1);
       var list_id = parentData._id;
       doc._owner = Meteor.userId();
       doc._list_id = list_id;
       parentData.inserting.set(!parentData.inserting.get());
       return doc;
     }
   }
 }
});
