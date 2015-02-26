var todoApp = angular.module('todo');

todoApp.factory('Projects', function($window) {
  return {
    all: function() {
      var projectList = [];
      var projectString = $window.localStorage['projects'];

      if (projectString) {
        projectList = angular.fromJson(projectString);
      }

      return projectList;
    },

    save: function(projects) {
      $window.localStorage['projects'] = angular.toJson(projects);
    },

    newProject: function(projectTitle) {
      // Add a new project
      return {
        title: projectTitle,
        tasks: []
      };
    },

    getLastActiveIndex: function() {
      return parseInt($window.localStorage['lastActiveProject']) || 0;
    },

    setLastActiveIndex: function(index) {
      $window.localStorage['lastActiveProject'] = index;
    }
  }
});
