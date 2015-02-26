// I know it's not good to put all your controller in a single file
// so don't blame me becase I'm lazy :P

var todoApp = angular.module('todo');

todoApp.controller('TodoCtrl', function($scope, $ionicModal, $ionicSideMenuDelegate, Projects) {
  // Load or initialize projects
  $scope.projects = Projects.all();

  // Grab the last active, or the first project
  $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];

  // Empty object
  $scope.task = {};

  // Animations and modals
  // ---------------------

  $ionicModal.fromTemplateUrl('views/modal.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.toggleProjects = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  // Task management
  // ---------------

  $scope.createTask = function(task) {
    if ($scope.activeProject && typeof task.title !== 'undefined' && task.title) {
      $scope.activeProject.tasks.push({
        title: task.title
      });
      $scope.taskModal.hide();
      task.title = '';

      // Persist all projects (inefficient)
      Projects.save($scope.projects);
    }
  };

  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

  // Project management
  // ------------------

  var createProject = function(projectTitle) {
    var newProject = Projects.newProject(projectTitle);
    $scope.projects.push(newProject);
    Projects.save($scope.projects);
    $scope.selectProject(newProject, $scope.projects.length - 1);
  }

  $scope.newProject = function() {
    var projectTitle = prompt('Project name');
    if (projectTitle) {
      createProject(projectTitle);
    }
  };

  $scope.selectProject = function(project, index) {
    $scope.activeProject = project;
    Projects.setLastActiveIndex(index);
    $ionicSideMenuDelegate.toggleLeft();
  };
});
