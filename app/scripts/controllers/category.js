'use strict';

/**
 * @ngdoc function
 * @name sappApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the sappApp
 */
angular.module('sappApp')
  .controller('CategoryCtrl', function ($scope, $state, $stateParams, toaster) {

    var dbLocal = new PouchDB('stoveDb');

    $scope.data = {};
    $scope.data.category = {};
    $scope.data.category.isPublic = true;

    $scope.saveCategory = function () {
      var timeStamp = String(new Date().getTime());
      var params = {
        _id: timeStamp,
        name: $scope.data.category.name,
        description: $scope.data.category.description,
        isPublic: $scope.data.category.isPublic,
        view: 'stoveCategories'
      };
      dbLocal.put(params).then(function (response) {
        console.log(response);
        // handle response
        toaster.success({title: "Created category"});
        $state.go('main.categories');
      }).catch(function (err) {
        console.log(err);
      });
    };

    var _init = function () {
      if ($stateParams.id != 'new') {
        dbLocal.get($stateParams.id).then(function (doc) {
          // handle doc
          console.log(doc)
          $scope.data.category = doc;
          $scope.$apply();
        }).catch(function (err) {
          console.log(err);
        });

      }
    }

    _init();
  });
