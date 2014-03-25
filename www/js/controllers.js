// I know it's not good to put all your controller in a single file
// so don't blame me becase I'm lazy :P

var todoApp = angular.module('todo');

todoApp.controller('TodoCtrl', function($scope, $ionicModal) {
  $scope.tasks = [
    { title: 'Coding' },
    { title: 'Watch Walking Dead' },
    { title: 'Play with Starbound' },
    { title: 'Get milk' },
    { title: 'Finish read Secrets and Lies book (Schneier)' }
  ];

  // Empty object
  $scope.task = {};

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('views/modal.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    if (typeof task.title !== 'undefined' && task.title) {
      $scope.tasks.push({
        title: task.title
      });
      $scope.taskModal.hide();
      task.title = '';
    }
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
});
