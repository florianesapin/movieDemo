'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MovieCtrl', function ($http, $scope, $routeParams, MoviesDB, $rootScope) {

  /**$rootScope.MoviesDB = MoviesDB;*/


    $http.get('http://amc.ig.he-arc.ch:3003/movie/' + $routeParams.id + '?append_to_response=similar,releases,credits&language=fr').success(function(data){
    	$scope.movie = data;
    });
   
    /**$rootScope.bgImage = $scope.movie.backdrop_path;*/
 

  });
