var NotebookSchema = new SimpleSchema({
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
    min: 10
    },
  main: {
    type: Boolean
    },
  numberOfNotes: {
    type: Number,
    optional: true,
    autoform: {
      omit: true
    }
    }
});

Notebooks = new Meteor.Collection('notebooks');
Notebooks.attachSchema(NotebookSchema);

Notebooks.allow({
    insert: function() {return true},
    update: function() {return true},
    remove: function() {return true}
});

Meteor.methods({
  'addNotebook': function (data) {
    data._owner = this.userId;
    Notebooks.insert(data);
    },
  'removeNotebook': function (id) {
    Notebooks.remove(id);
    }
});