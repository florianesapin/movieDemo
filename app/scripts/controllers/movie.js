'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MovieCtrl', function ($scope, $routeParams, MoviesDB) {
    $scope.listMovies = [];
    $scope.id = $routeParams.id;
    $scope.listMovies = MoviesDB.getMovies();
    $scope.movie = $scope.listMovies[$scope.id];
    

  });
