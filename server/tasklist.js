Meteor.publish('tasks', function() {
    let jsonQuery = this.userId ? {
        userId: this.userId
    } : {};
    return Tasks.find(jsonQuery);
});
