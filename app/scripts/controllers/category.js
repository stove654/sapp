'use strict';

/**
 * @ngdoc function
 * @name sappApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the sappApp
 */
angular.module('sappApp')
  .controller('CategoryCtrl', function ($scope, $state, $stateParams) {

    $scope.data = {};
    $scope.data.category = {};
    $scope.data.category.isPublic = true;
    console.log($stateParams)

    $scope.saveCategory = function () {
      var params = {
        name: $scope.data.category.name,
        description: $scope.data.category.description,
        isPublic: $scope.data.category.isPublic
      };
    };

   /* var _init = function () {
      if ($stateParams.id != 'new') {
        categoriesFactory.getCategory($stateParams.id).then(function (data) {
          $scope.data.category = data;
          console.log(data)
        })
      }
    }

    _init();*/
  });
