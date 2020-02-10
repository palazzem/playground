Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function () {
            var title = this.get('newTitle');
            if (!title.trim()) {
                return;
            }

            // Create a new record for Todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            todo.save();

            this.set('newTitle', '');
        },
        clearCompleted: function () {
            var completed = this.filterProperty('isCompleted', true);
            completed.invoke('deleteRecord');
            completed.invoke('save');
        }
    },

    allAreDone: function (key, value) {
        if (typeof value === "undefined") {
            return !!this.get('length') && this.everyBy('isCompleted', true);
        } else {
            this.setEach('isCompleted', value);
            this.invoke('save');
            return value;
        }
    }.property('@each.isCompleted'),
    
    remaining: function () {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    completed: function () {
        return this.filterBy('isCompleted', true).get('length');
    }.property('@each.isCompleted'),

    hasCompleted: function () {
        return this.get('completed') > 0;
    }.property('completed'),

    inflection: function () {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'todo' : 'todos';
    }.property('remaining')
});