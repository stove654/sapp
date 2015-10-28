'use strict';

/**
 * @ngdoc overview
 * @name sappApp
 * @description
 * # sappApp
 *
 * Main module of the application.
 */
angular
  .module('sappApp', [
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule',
    'pascalprecht.translate',
    'toaster'
  ])

  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    //
    // For any unmatched url, redirect to /main
    $urlRouterProvider.otherwise("/main/categories");
    //
    // Now set up the states
    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: "views/main.html",
        controller: 'MainCtrl'
      })
      .state('main.categories', {
        url: "/categories",
        templateUrl: "views/states/categories.html",
        controller: 'CategoriesCtrl'
      })

      .state('main.category', {
        url: "/categories/:id",
        templateUrl: "views/states/category.html",
        controller: 'CategoryCtrl'
      })

      .state('main.foods', {
        url: "/foods",
        templateUrl: "views/states/foods.html",
        controller: 'FoodsCtrl'
      })

    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = $httpProvider.defaults.headers.post['Content-Type'];

  });
