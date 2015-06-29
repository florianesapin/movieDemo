'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.listFilm = [
    ];
    for(var i =0; i< 0; i++){
		$scope.listFilm.push('Element ' + (i + 1));
    }
	$scope.nbrAffiche = 5;
	$scope.active = true;
	$scope.monClick = function(){
		$scope.listFilm.push($scope.nouveauFilm);
		$scope.nouveauFilm = '';
	}

	$scope.remove = function(el){
  		var index = $scope.listFilm.indexOf(el);
  		$scope.listFilm.splice(index, 1); 
	};
  });

