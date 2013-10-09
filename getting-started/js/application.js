// Initialize an Ember application
window.Todos = Ember.Application.create();

// Adapter for fixtures
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();