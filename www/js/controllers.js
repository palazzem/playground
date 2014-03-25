// I know it's not good to put all your controller in a single file
// so don't blame me becase I'm lazy :P

var todoApp = angular.module('todo');

todoApp.controller('TodoCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Coding' },
    { title: 'Watch Walking Dead' },
    { title: 'Play with Starbound' },
    { title: 'Get milk' },
    { title: 'Finish read Secrets and Lies book (Schneier)' }
  ]
});
