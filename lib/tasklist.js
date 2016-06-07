Tasks = new Mongo.Collection('tasks');
Meteor.methods({
    addTask: function(name) {
        try {
            if (!Meteor.userId()) {
                throw new Meteor.Error('No Access!', 'The user must be logged in to post a comment.');
            }
        } catch (e) {
            console.log(e.message);
            return false;
        };

        Tasks.insert({
            name: name,
            createdAt: new Date(),
            userId: Meteor.userId()
        });
    },
    deleteTask: function(taskId) {
        try {
            if (!Meteor.userId()) {
                throw new Meteor.Error('No Access!', 'The user must be logged in to delete a comment.');
            }
        } catch (e) {
            console.log(e.message);
            return false;
        };

        Tasks.remove({
            _id: taskId
        });
    }
});
