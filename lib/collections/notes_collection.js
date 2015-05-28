var NoteSchema = new SimpleSchema(
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
    _notebook: {
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
    content: {
      type: String,
      min: 10,
      max: 100
    },
    date: {
      type: Date
    }
  }
);

Notes = new Meteor.Collection('notes');
Notes.attachSchema(NoteSchema);


Notes.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

Meteor.methods({
  removeNote: function (id) {
    Notes.remove(id);
  },
  addNote: function (data) {
    data.date = new Date();
    Notes.insert(data);
  }
});
