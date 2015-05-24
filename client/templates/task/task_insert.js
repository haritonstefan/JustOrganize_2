AutoForm.hooks({
 insertTask: {
   before: {
     method: function (doc) {
       var list_id = Template.parentData(1);
       doc._owner = Meteor.userId();
       doc._list_id = list_id;
       return doc;
     }
   }
 }
});
