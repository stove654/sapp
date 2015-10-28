'use strict';

/**
 * @ngdoc function
 * @name sappApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the sappApp
 */
angular.module('sappApp')
  .controller('CategoryCtrl', function ($scope, $state, $stateParams, toaster, PouchService) {

    var dbLocal = new PouchDB('stoveDb');

    $scope.data = {};
    $scope.data.category = {};
    $scope.data.category.isPublic = true;

    $scope.saveCategory = function () {
      var params = {
        name: $scope.data.category.name,
        description: $scope.data.category.description,
        isPublic: $scope.data.category.isPublic,
        view: 'stoveCategories'
      };
      PouchService.createDoc(params).then(function (res) {
        toaster.success({title: "Created category"});
        $state.go('main.categories');
      })
    };

    var _init = function () {
      if ($stateParams.id != 'new') {
        PouchService.getDoc($stateParams.id).then(function (res) {
          $scope.data.category = res;
          $scope.$apply();
        })
      }
    };

    _init();
  });
