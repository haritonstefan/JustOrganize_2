Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.registerHelper('formatDate', function(date, format) {
  return moment(date).format(format);
});
