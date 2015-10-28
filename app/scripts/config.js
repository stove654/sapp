'use strict';

/**
 * @ngdoc function
 * @name sappApp.config:APP_CONFIG
 * @description
 * # APP_CONFIG
 * Controller of the sappApp
 */
angular.module('sappApp')
  .constant('APP_CONFIG', {
    baseUrl: 'http://localhost:8080/api/',
    fireBaseUrl: 'http://easyrestaurant.firebaseio.com/',
    facebookId: 895357913876223
  });