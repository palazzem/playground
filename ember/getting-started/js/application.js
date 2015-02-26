// Initialize an Ember application
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});

// Adapter for fixtures
// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();