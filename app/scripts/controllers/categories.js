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

    $scope.data = {};
    $scope.data.categories = [];

    $scope.openCategory = function (id) {
      if (!id) {
        $state.go('main.category', {id: 'new'})
      } else {
        $state.go('main.category', {id: id})
      }
    };

    var dbLocal = new PouchDB('stoveDb');
    dbLocal.get('stoveCategories').then(function (doc) {
      // handle doc
      console.log(doc)
    }).catch(function (err) {
      console.log(err);
    });

/*
    var _init = function () {
      categoriesFactory.getCategories().then(function (data) {
        $scope.data.categories = data;
        console.log($scope.data);
      })
    };

    _init();*/
  });
