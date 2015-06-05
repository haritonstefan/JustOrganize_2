Template.transactionShow.helpers({
  'income': function(){
    return this.type == '+';
  }
});