'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MainCtrl', function ($scope, MoviesDB) {
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

	$scope.remove = function(el){
		MoviesDB.removeMovie(el);


	};

  });


