// Ember routing { '/' will render 'todos' template }
Todos.Router.map(function () {
    this.resource('todos', { path: '/'});
});

// Router to display model data
Todos.TodosRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('todo');
    }
});
