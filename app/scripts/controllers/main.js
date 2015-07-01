'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MainCtrl', function ($http, $scope, MoviesDB, $rootScope) {
    $scope.listMovies = MoviesDB.getMovies();
    $scope.MoviesDB = MoviesDB;

   
	$scope.nbrAffiche = 5;
	$scope.active = true;
	$scope.monClick = function(){
		var title = $scope.newMovie;
		var comm = $scope.commMovie;
		var objMovie = {title: title, comment: comm};

		MoviesDB.addMovie(objMovie);
		$scope.newMovie = '';

	}
	$scope.research = function(){
		
    $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?querry=' + $scope.search + '&language=fr').success(function(data){
    	$scope.listMovies = data.results;
    });
		
	}
	$scope.remove = function(el){
		MoviesDB.removeMovie(el);


	};

  });


