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
    $scope.awesomeThings = [
    ];
    for(var i =0; i< 0; i++){
		$scope.awesomeThings.push('Element ' + (i + 1));
    }
	$scope.nbrAffiche = 5;
	$scope.active = true;
	$scope.monClick = function(){
		$scope.awesomeThings.push($scope.nouveauFilm);
		$scope.nouveauFilm = '';
	}

	$scope.remove = function(el){
  		var index = $scope.awesomeThings.indexOf(el);
  		$scope.awesomeThings.splice(index, 1); 
	};
  });

