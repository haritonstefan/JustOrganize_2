var TaskSchema = new SimpleSchema(
  {
    _id: {
      type: String,
      optional: true,
      autoform: {
        omit: true
      }
    },
    _owner: {
      type: String,
      optional: true,
      autoform: {
        omit: true
      }
    },
    name: {
      type: String,
      min: 3,
      max: 30
    },
    description: {
      type: String,
      min: 10,
      max: 100
    },
    due: {
      type: Date
    }
  }
);

Tasks = new Meteor.Collection('tasks');
Tasks.attachSchema(TaskSchema);