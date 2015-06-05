Template.sidebar.events({
  "click .sidebar-item": function (event, template) {
    $('.active').removeClass('active');
    $(event.currentTarget).addClass('active');
    }
});