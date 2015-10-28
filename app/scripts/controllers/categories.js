'use strict';

/**
 * @ngdoc function
 * @name sappApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the sappApp
 */
angular.module('sappApp')
  .controller('CategoriesCtrl', function ($scope, $state, PouchService) {

    $scope.data = {};
    $scope.data.categories = [];

    $scope.openCategory = function (id) {
      if (!id) {
        $state.go('main.category', {id: 'new'})
      } else {
        $state.go('main.category', {id: id})
      }
    };

    var _init = function () {
      PouchService.query('stoveCategories').then(function (res) {
        $scope.data.categories = res;
        $scope.$apply();
        console.log(res);
      })
    };

    _init();



/*
    var _init = function () {
      categoriesFactory.getCategories().then(function (data) {
        $scope.data.categories = data;
        console.log($scope.data);
      })
    };

    _init();*/
  });
