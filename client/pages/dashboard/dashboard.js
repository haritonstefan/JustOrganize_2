Template.dashboardPage.helpers({
  notebookData: function () {
    return Notebooks.findOne({main: true});
  },
  budgetData: function () {
    return Budgets.findOne({main: true});
  },
  tasklistData: function () {
    return Tasklists.findOne({main: true});
  }
});