'use strict';

/**
 * @ngdoc function
 * @name sappApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the sappApp
 */
angular.module('sappApp')
  .controller('CategoriesCtrl', function ($scope, $state, pouchdb) {

    var dbLocal = new PouchDB('stoveDb');

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
      var data = [];
      dbLocal.query(function(doc, emit) {
        if (doc.view === 'stoveCategories') {
          emit(doc);
        }
      }).then(function (result) {
        _.map(result.rows, function (doc) {
          console.log(doc)
          data.push(doc.key);
        });
        $scope.data.categories = data;
        $scope.$apply();
        console.log($scope.data.categories)
        // handle result
      }).catch(function (err) {
        console.log(err);
      });
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
