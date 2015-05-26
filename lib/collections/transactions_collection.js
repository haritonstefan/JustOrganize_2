var TransactionSchema = new SimpleSchema({
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
    _budget: {
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
    ammount: {
        type: Number
    },
    type: {
        type: String
    },
    date: {
        type: Date
    }
});

Transactions = new Meteor.Collection('transactions');
Transactions.attachSchema(TransactionSchema);

Transactions.allow({
    insert: function() {return true},
    update: function() {return true},
    remove: function() {return true}
});

Meteor.methods({
    'addTransaction': function(data) {
        data.date = new Date();
        Transactions.insert(data);
    },
    'removeTransaction': function(id) {
        Transactions.remove(id);
    }
});