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
    $scope.listFilm = getFilm();


    /**for(var i =0; i< 0; i++){
		$scope.listFilm.push('Element ' + (i + 1));
    }*/

	$scope.nbrAffiche = 5;
	$scope.active = true;
	$scope.monClick = function(){
		var titre = $scope.nouveauFilm;
		var comm = $scope.commFilm;
		var objFilm = {titre: titre, comment: comm};
		$scope.listFilm.push(objFilm);
		$scope.nouveauFilm = '';
		setFilm();
	}

	$scope.remove = function(el){
  		var index = $scope.listFilm.indexOf(el);
  		$scope.listFilm.splice(index, 1);
  		setFilm();

	};
	function setFilm(){
		localStorage.setItem("liste", JSON.stringify($scope.listFilm));
	};
	function getFilm(){
		var liste = localStorage.getItem("liste");
		if(liste == null){
			liste = [];
		}else{
			liste = JSON.parse(liste);
		}
		return liste;
	}
  });

/**var monObj = {nom: "Floriane" , test: 22, l:[1,2,3]};
var monJSON = JSON.stringify(monObj);
var MOnNewObj = JSON.parse(monJSON);*/
