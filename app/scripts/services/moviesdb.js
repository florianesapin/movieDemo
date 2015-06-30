'use strict';

/**
 * @ngdoc service
 * @name movieDemoApp.MoviesDB
 * @description
 * # MoviesDB
 * Factory in the movieDemoApp.
 */
angular.module('movieDemoApp')
  .factory('MoviesDB', function ($http) {
    // Service logic
    // ...



    var meaningOfLife = 42;
   
    var listMovies = localStorage.getItem("list");
	if(!listMovies){
		listMovies = [];
	}else{
		listMovies = JSON.parse(listMovies);
	}
	

	$http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr').success(function(data){
    	listMovies = data.results;
    });


    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getMovies: function(){
        return listMovies;
      }, setMovies : function(listMovies){
        localStorage.setItem("list", JSON.stringify(listMovies));
      }, removeMovie: function(el){
      	  	var index = listMovies.indexOf(el);
  			listMovies.splice(index, 1);
  			localStorage.setItem("list", JSON.stringify(listMovies));
      }, addMovie: function(movie){
			listMovies.push(movie);
			localStorage.setItem("list", JSON.stringify(listMovies));
      }

    };
  });
