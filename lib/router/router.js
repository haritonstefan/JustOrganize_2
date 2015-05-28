Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  controller: 'MainController'
});

Router.route('/tasklists', {
  name: 'tasklists',
  controller: 'TasklistsController'
});

Router.route('/budgets', {
  name: 'budgets',
  controller: 'BudgetsController'
});

Router.route('/notebooks', {
  name: 'notebooks',
  controller: NotebooksController
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: DashboardController
});