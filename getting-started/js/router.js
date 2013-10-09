// Ember routing { '/' will render 'todos' template }
Todos.Router.map(function () {
    this.resource('todos', { path: '/'}, function (){
        // Append child routes
        this.route('active');
        this.route('completed');
    });
});

Todos.TodosIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('todos')
    }
});

Todos.TodosActiveRoute = Ember.Route.extend({
    model: function () {
        return this.store.filter('todo', function (todo){
           return !todo.get('isCompleted');
        });
    },

    renderTemplate: function(controller){
        this.render('todos/index', {controller: controller});
    }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
    model: function () {
        return this.store.filter('todo', function (todo){
           return todo.get('isCompleted');
        });
    },

    renderTemplate: function(controller){
        this.render('todos/index', {controller: controller});
    }
});

// Router to display model data
Todos.TodosRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('todo');
    }
});
