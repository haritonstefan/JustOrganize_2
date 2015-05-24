Template.taskShow.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.taskShow.events({
  "click #deleteTask": function(event, template){
    Meteor.call("removeTask", this._id);
  }
});
