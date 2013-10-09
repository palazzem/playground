// Ember routing { '/' will render 'todos' template }
Todos.Router.map(function () {
    this.resource('todos', { path: '/'});
});
