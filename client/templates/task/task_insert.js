AutoForm.hooks({
 insertTask: {
   before: {
     method: function (doc) {
       var parentData = Template.parentData(1);
       doc._owner = Meteor.userId();
       doc._list_id = parentData.data._id;
       parentData.inserting = !parentData.inserting;
       return doc;
     }
   }
 }
});
