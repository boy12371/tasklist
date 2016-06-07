Meteor.subscribe('tasks');

Template.tasks.onCreated(function() {
    Blaze._allowJavascriptUrls();
});

Template.tasks.helpers({
    tasks: function() {
        var userID = Meteor.userId();
        var jsonQuery = userID ? {
            userId: userID
        } : {};
        return Tasks.find(jsonQuery, {
            sort: {
                createdAt: -1
            }
        });
    }
});

Template.tasks.events({
    "submit .add-task": function(event) {
        var name = event.target.name.value;
        // apply传递引用类型参数
        Meteor.apply('addTask', [name]);
        event.target.name.value = '';

        return false;
    },

    "click .delete-task": function(event) {
        if (confirm('Delete This Task?')) {
            // call传递非引用类型参数
            Meteor.call('deleteTask', this._id);
        }

        return false;
    }
});
