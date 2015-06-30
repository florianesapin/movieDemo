'use strict';

/**
 * @ngdoc filter
 * @name movieDemoApp.filter:urlPoster
 * @function
 * @description
 * # urlPoster
 * Filter in the movieDemoApp.
 */
angular.module('movieDemoApp')
  .filter('urlPoster', function (MoviesDB) {
    return function (posterURL) {
      if(posterURL){
        return MoviesDB.img() + 'w185' + posterURL;
      }else{
        return "/images/noposter.jpg"
      }
    };
  });
