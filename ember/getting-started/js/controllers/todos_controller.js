Todos.TodoController = Ember.ObjectController.extend({
    actions: {
        editTodo: function () {
            this.set('isEditing', true);
        },

        acceptChanges: function () {
            this.set('isEditing', false);

            var title = this.get('model.title');
            if (Ember.isEmpty(title)) {
                this.send('removeTodo');
            } else {
                this.get('model').save();
            }
        },

        removeTodo: function () {
            var todo = this.get('model');
            todo.deleteRecord();
            todo.save();
        }
    },

    isEditing: false,

    isCompleted: function(key, value) {
        var model = this.get('model');

        if (value === undefined) {
            // Property used as getter
            return model.get('isCompleted');
        } else {
            // Property used as setter
            model.set('isCompleted', value);
            model.save();
            return value;
        }
    }.property('model.isCompleted')
});
