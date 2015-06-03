var BudgetSchema = new SimpleSchema({
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
    expenses_sum: {
        type: Number,
        optional: true,
        autoform: {
            omit: true
        }
    },
    incomes_sum: {
        type: Number,
        optional: true,
        autoform: {
            omit: true
        }
    },
    balance: {
        type: Number,
        optional: true,
        autoform: {
            omit: true
        }
    }
});

Budgets = new Meteor.Collection('budgets');
Budgets.attachSchema(BudgetSchema);

Budgets.allow({
    insert: function() {return true},
    update: function() {return true},
    remove: function() {return true}
});

Meteor.methods({
    'addBudget': function(data) {
        data._owner = this.userId;
        Budgets.insert(data);
    },
    'removeBudget': function(id) {
        Budgets.remove(id);
    },
  'updateBalance': function (transaction) {
    var budget = Budgets.findOne(transaction._budget);
    if (transaction.type == "+") {
      budget.balance = budget.balance + transaction.amount;
      budget.incomes_sum = budget.incomes_sum + transaction.amount;
    } else {
      budget.balance = budget.balance - transaction.amount;
      budget.expenses_sum = budget.incomes_sum + transaction.amount;
    }
    }
});