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
    expenses: {
        type: Number,
        optional: true,
        autoform: {
            omit: true
        }
    },
    incomes: {
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
    insert: function() {return this.userId;},
    update: function() {return this.userId;},
    remove: function() {return this.userId;}
});

Meteor.methods({
    'addBudget': function(data) {
        Budgets.insert(data);
    },
    'removeBudget': function(id) {
        Budgets.remove(id);
    }
})