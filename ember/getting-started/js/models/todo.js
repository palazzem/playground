// Model definition
Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

// Some fixtures
Todos.Todo.FIXTURES= [
    {
        id: 1,
        title: 'Watch the office series',
        isCompleted: true
    },
    {
        id: 2,
        title: 'Kill the giant spider :O',
        isCompleted: true
    },
    {
        id: 3,
        title: 'Release the Kraken!',
        isCompleted: false
    }
];
