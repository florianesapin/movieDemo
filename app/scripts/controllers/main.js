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
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    for(var i =0; i< 100; i++){
		$scope.awesomeThings.push('Element ' + (i + 1));
    }
	$scope.nbrAffiche = 20;
	$scope.active = true;
	$scope.monClick = function(){
		$scope.awesomeThings.push($scope.nouveauFilm);
		$scope.nouveauFilm = '';
	}
  });

