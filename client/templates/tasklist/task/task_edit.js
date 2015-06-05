Template.taskEdit.events({
  "click #cancelEdit": function (e, t) {
    t.data.editing.set(!t.data.editing.get());
  }
});