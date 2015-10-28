'use strict';

/**
 * @ngdoc service
 * @name sappApp.pouchdb
 * @description
 * # pouchdb
 * Factory in the sappApp.
 */
angular.module('sappApp')
  .factory('pouchdb', function () {
    return new PouchDB('restaurantManagerApp');
  });
