(function() {
    'use strict';

    angular
        .module('petraApp')
        .controller('mainController', mainController);


    function mainController($scope, $http) {

        $http.get('projects.json').success(function(data) {
            $scope.projects = data;
        }).then(function(){
            $scope.show = false;

            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            $scope.showWidth = width > 1000;

            $scope.onItemClicked = function() {
              $scope.show = !$scope.show;
            };


        });

    }
})();
