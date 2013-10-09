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
        }
    },
    
    remaining: function () {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function () {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'todo' : 'todos';
    }.property('remaining')
});
