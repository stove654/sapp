'use strict';

/**
 * @ngdoc function
 * @name sappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sappApp
 */
angular.module('sappApp')
  .controller('MainCtrl', function ($scope, pouchdb) {
    var dbLocal = new PouchDB('stoveDb');
    dbLocal.allDocs({
      include_docs: true
    }).then(function(result) {
      console.log(result)
    }).catch(function(err) {
      console.log(err);
    });
  });
